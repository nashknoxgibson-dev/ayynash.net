export async function onRequest(context) {
  const { request, env } = context;
  const cookie = request.headers.get("Cookie") || "";

  if (!cookie.includes(`__Host-members_session=${env.MEMBERS_COOKIE}`)) {
    return Response.redirect(new URL("/members-login/", request.url), 302);
  }

  return context.next();
}