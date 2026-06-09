import { NextResponse } from "next/server";

// 레거시(Tomcat) 홈페이지에는 있었으나 새 사이트에서 폐기되어
// 대응 페이지가 없는 경로들. 검색엔진에 색인된 옛 URL이 404 대신
// 410 Gone을 받아 더 빠르게 색인에서 제거되도록 한다.
//
// 대응 페이지가 있는 경로(예: /company/contents)는 next.config.ts의
// redirects()에서 308 영구 리다이렉트로 처리한다.
//
// 410 상태코드는 유지(검색엔진 deindex 신호)하되, 실수로 들어온 사용자가
// 백지를 보지 않도록 안내 HTML을 함께 반환한다. 사이트 레이아웃(헤더/푸터)
// 없이 독립적으로 동작하도록 인라인 HTML로 작성한다.
const GONE_PAGE_HTML = `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <title>페이지를 찾을 수 없습니다 | 캐럿아이</title>
    <style>
      :root { color-scheme: light; }
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        min-height: 100vh;
        min-height: 100dvh; /* 모바일 주소창 영역을 제외한 실제 화면 기준 중앙 정렬 */
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple SD Gothic Neo",
          "Malgun Gothic", "맑은 고딕", sans-serif;
        background: #ffffff;
        color: #1c1917;
      }
      .card { text-align: center; max-width: 420px; }
      .code { font-size: 14px; font-weight: 600; letter-spacing: 0.08em; color: #f97316; }
      h1 { margin-top: 16px; font-size: 24px; font-weight: 700; line-height: 1.4; }
      p { margin-top: 12px; font-size: 15px; line-height: 1.7; color: #57534e; }
      a.home {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem; /* gap-xs */
        min-height: 36px;
        margin-top: 28px;
        padding: 0.5rem 1rem; /* py-xs px-md */
        border-radius: 0.75rem; /* rounded-xl */
        background: #f97316; /* bg-primary */
        color: #ffffff;
        box-shadow: 0 1px 2px rgb(0 0 0 / 5%); /* shadow-xs */
        font-size: 15px;
        font-weight: 500;
        text-decoration: none;
        transition: background-color 0.2s;
      }
      a.home:hover { background: #ea580c; }
    </style>
  </head>
  <body>
    <main class="card">
      <div class="code">410 GONE</div>
      <h1>요청하신 페이지는<br />더 이상 제공되지 않습니다.</h1>
      <p>홈페이지가 새롭게 개편되면서<br />해당 페이지가 사라졌어요.</p>
      <a class="home" href="/">홈으로 가기</a>
    </main>
  </body>
</html>
`;

export function proxy() {
  return new NextResponse(GONE_PAGE_HTML, {
    status: 410,
    statusText: "Gone",
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

// matcher는 빌드타임에 정적 분석되므로 상수 배열로만 작성한다.
export const config = {
  matcher: [
    "/member/:path*", // 회원(가입/로그인/아이디·비번찾기/마이페이지) - 폐기
    "/recruit/:path*", // 채용 지원 - 폐기
    "/contact/:path*", // 문의 게시판 - 모달로 대체
    "/community/:path*", // 커뮤니티(공지/지식) - 폐기
    "/service", // 서비스 소개 - 폐기
    "/service-framework", // 서비스 프레임워크 소개 - 폐기
    "/personal-policy", // 개인정보처리방침 - 모달로 대체
    "/vol-personal-policy", // 자원봉사자 개인정보처리방침 - 모달로 대체
    "/email-policy", // 이메일무단수집거부 - 모달로 대체
  ],
};
