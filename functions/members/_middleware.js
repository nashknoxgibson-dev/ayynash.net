export async function onRequest(context) {
  const { request, env, next } = context;
  const url = new URL(request.url);

  if (!url.pathname.startsWith("/members")) {
    return next();
  }

  const auth = request.headers.get("Authorization");
  if (!auth) {
    return new Response("Authentication required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Members Area"' }
    });
  }

  const [scheme, encoded] = auth.split(" ");
  if (scheme !== "Basic" || !encoded) {
    return new Response("Invalid authentication", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Members Area"' }
    });
  }

  const decoded = atob(encoded);
  const [username, password] = decoded.split(":");

  if (username !== env.MEMBERS_USER || password !== env.MEMBERS_PASS) {
    return new Response("Invalid credentials", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Members Area"' }
    });
  }

  return next();
}