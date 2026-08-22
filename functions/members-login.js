// Retired. This used to accept the shared members password and set the
// __Host-members_session cookie. The members area is now the public /join/
// page, so this endpoint no longer authenticates anything — it just forwards.
export async function onRequest(context) {
  return Response.redirect(new URL("/join/", context.request.url), 301);
}
