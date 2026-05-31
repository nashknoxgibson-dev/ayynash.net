export async function onRequest() {
  return new Response(null, {
    status: 302,
    headers: {
      "Location": "/",
      "Set-Cookie": "__Host-members_session=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0"
    }
  });
}