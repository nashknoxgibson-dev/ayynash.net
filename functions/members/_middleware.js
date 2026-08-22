// The members area has been folded into the public /join/ page.
// This used to gate /members/ behind a shared password (MEMBERS_COOKIE).
// It now just forwards old links so nothing 404s.
export async function onRequest(context) {
  const { request } = context;
  return Response.redirect(new URL("/join/", request.url), 301);
}
