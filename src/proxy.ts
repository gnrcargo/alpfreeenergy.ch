import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// -----------------------------------------------------------------------------
// Protezione area interna (/interno) con HTTP Basic Auth.
//   • Credenziali SOLO da variabili d'ambiente (mai nel codice/git):
//       INTERNO_USER, INTERNO_PASS   → impostarle su Vercel (Project Settings).
//   • Fail-closed: se non sono configurate, l'accesso è NEGATO (401), non aperto.
// (In Next.js 16 questo file si chiama "proxy", ex "middleware".)
// -----------------------------------------------------------------------------
export function proxy(req: NextRequest) {
  const user = process.env.INTERNO_USER;
  const pass = process.env.INTERNO_PASS;

  const deny = () =>
    new NextResponse("Autenticazione richiesta.", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="AlpFree area interna"' },
    });

  // se le credenziali non sono impostate sull'ambiente, blocca tutto
  if (!user || !pass) return deny();

  const auth = req.headers.get("authorization");
  if (auth?.startsWith("Basic ")) {
    try {
      const decoded = atob(auth.slice(6));
      const sep = decoded.indexOf(":");
      const u = decoded.slice(0, sep);
      const p = decoded.slice(sep + 1);
      if (u === user && p === pass) return NextResponse.next();
    } catch {
      // header malformato → nega
    }
  }
  return deny();
}

export const config = {
  matcher: ["/interno", "/interno/:path*"],
};
