export async function onRequestPost(context) {
  const { request, env } = context;
  const formData = await request.formData();
  const password = formData.get("password");

  if (password !== env.MEMBERS_PASS) {
    return new Response("Wrong password", { status: 401 });
  }

  return new Response(null, {
    status: 302,
    headers: {
      "Location": "/members/",
      "Set-Cookie": `__Host-members_session=${env.MEMBERS_COOKIE}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=900`
    }
  });
}