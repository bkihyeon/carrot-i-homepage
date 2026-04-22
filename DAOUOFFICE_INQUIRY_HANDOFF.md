# 다우오피스 SMTP 문의 연동 요청 문서

## 목적

홈페이지 `문의하기` 폼이 제출되면, 다우오피스 메일 계정을 통해 지정된 담당자 메일로 자동 발송되도록 연동하려고 합니다.

현재 웹사이트 쪽 개발은 서버 액션 기준으로 반영되어 있으며, SMTP 연동에 필요한 설정값만 준비되면 연결할 수 있는 상태입니다.

## 현재 웹사이트에서 준비된 항목

- 문의하기 입력 항목
  - 회사명
  - 성함
  - 이메일
  - 문의내용
  - 개인정보 수집동의 여부
- 서버에서 SMTP로 메일 발송하는 구조 구현 완료
- 수신 테스트 메일 주소 임시 지정 완료
  - `lhb@carrot-i.com`

관련 구현 파일:

- [src/components/shared/modal/model/inquiry.action.ts](/Users/leehyunbin/Desktop/carrot-i/carrot-i-Renewal/carrot-i-renewal/src/components/shared/modal/model/inquiry.action.ts:1)
- [.env.example](/Users/leehyunbin/Desktop/carrot-i/carrot-i-Renewal/carrot-i-renewal/.env.example:1)

## 담당자분께 요청드릴 작업

### 1. SMTP 사용 가능 여부 확인

아래 항목이 가능한지 확인 부탁드립니다.

- 다우오피스 메일 계정의 `SMTP AUTH` 사용 가능 여부
- 외부 서버에서 SMTP 발송 허용 여부
- 자동 발송용 전용 메일 계정 생성 가능 여부

### 2. 발신용 다우오피스 메일 계정 준비

문의 발송 전용 메일 계정을 하나 준비해 주시면 가장 좋습니다.

권장 예시:

- `inquiry@carrot-i.com`
- `webmaster@carrot-i.com`

전용 계정이 좋은 이유:

- 담당자 변경 시 운영이 쉬움
- 비밀번호 교체 관리가 쉬움
- 홈페이지 자동 발송 용도와 개인 메일 용도를 분리 가능

### 3. SMTP 접속 정보 확인

아래 정보가 필요합니다.

- SMTP 서버 주소
- SMTP 포트
- SSL/TLS 사용 여부
- SMTP 로그인 계정
- SMTP 비밀번호
- 발신 주소로 사용할 메일 주소

## 저에게 전달해주시면 되는 정보

아래 정보만 있으면 연결 가능합니다.

### 필수

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`

### 선택

- `INQUIRY_TO_EMAIL`
  - 현재 기본값은 `lhb@carrot-i.com`
  - 다른 주소로 받고 싶으면 같이 알려주시면 됩니다

## 전달 방식 권장

`SMTP_PASS`는 민감 정보이므로 메신저 평문 전달보다는 아래 방식 중 하나를 권장드립니다.

- 운영 서버 또는 배포 환경에 직접 환경변수로 등록
- 사내 비밀관리 도구를 통해 전달
- 비밀번호 관리 도구를 통한 공유

가능하면 관리자 계정 전체를 공유하기보다는, 발신용 메일 계정 정보만 안전하게 전달받는 방식이 가장 좋습니다.

## 전달 예시

```env
SMTP_HOST=...
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=...
SMTP_PASS=...
SMTP_FROM=...
INQUIRY_TO_EMAIL=lhb@carrot-i.com
```

## 담당자분께 보낼 요청 문구 예시

안녕하세요.

홈페이지 문의하기 폼을 다우오피스 SMTP 계정을 통해 자동 메일 발송되도록 연동하려고 합니다.
웹사이트 개발은 완료되어 있고, SMTP 설정값만 준비되면 연결 가능한 상태입니다.

확인 부탁드리는 항목은 아래입니다.

1. SMTP AUTH 사용 가능 여부
2. 외부 서버에서 SMTP 발송 허용 여부
3. 발신용 다우오피스 메일 계정 준비
4. SMTP 서버/포트/보안 방식 확인
5. SMTP 로그인 정보 전달

저에게 필요한 값은 아래입니다.

- SMTP_HOST
- SMTP_PORT
- SMTP_SECURE
- SMTP_USER
- SMTP_PASS
- SMTP_FROM

현재 테스트 수신자는 `lhb@carrot-i.com`으로 둘 예정입니다.
다른 수신 주소를 원하시면 `INQUIRY_TO_EMAIL`도 함께 알려주시면 됩니다.

민감정보는 메신저 평문보다는 환경변수 직접 등록 또는 안전한 공유 수단으로 전달 부탁드립니다.

감사합니다.

## 연결 후 확인할 테스트

설정값을 전달받은 뒤 아래 순서로 확인하면 됩니다.

1. 개발 또는 운영 환경에 환경변수 등록
2. 홈페이지에서 테스트 문의 1건 제출
3. `lhb@carrot-i.com`으로 메일이 정상 도착하는지 확인
4. 제목, 본문, 회신 주소가 맞는지 확인
5. 운영 반영

## 메모

현재 구현은 `문의 메일 발송` 기준으로 SMTP 연동까지 되어 있습니다.
추후 원하면 다우오피스 `Works` 저장이나 추가 알림 API까지 같이 붙일 수 있습니다.
