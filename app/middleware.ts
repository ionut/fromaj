// middleware.ts (in root directory)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Flag pentru a activa/dezactiva modul concediu
const VACATION_MODE: boolean = true;

export function middleware(request: NextRequest) {
  // Dacă suntem în vacation mode, redirecționează toate rutele către home
  if (VACATION_MODE) {
    console.log("true");
    // Permite accesul la fișierele statice și API-uri necesare
    if (
      request.nextUrl.pathname.startsWith("/_next") ||
      request.nextUrl.pathname.startsWith("/api") ||
      request.nextUrl.pathname.startsWith("/static") ||
      request.nextUrl.pathname.includes(".")
    ) {
      return NextResponse.next();
    }

    // Dacă nu suntem deja pe home page, redirecționează
    if (request.nextUrl.pathname !== "/") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
