import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentUser } from "./action/session.actions";

import { protected_routes } from "./const/route/protected_routes";

export async function proxy(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Ignore static files and favicon
  if (pathname.startsWith("/_next") || pathname === "/favicon.ico") {
    return NextResponse.next();
  }

  // // Check public routes (exact match only)
  // const isPublic = public_routes.some((r) => {
  //   if (r.path.endsWith("/*")) {
  //     const basePath = r.path.slice(0, -2);
  //     // Match both /safaries and /safaries/anything
  //     return pathname === basePath || pathname.startsWith(basePath + "/");
  //   }
  //   console.log(pathname, r.path);
  //   return pathname === r.path;
  // });

  // if (isPublic) return NextResponse.next();

  // Check protected routes
  const matchedProtected = protected_routes.find((r) => {
    if (r.path.includes("*")) {
      const regexPath = "^" + r.path.replace(/\*/g, "[^/]+") + "$";
      const regex = new RegExp(regexPath);
      return regex.test(pathname);
    }

    return pathname === r.path;
  });
  // Not listed → allow
  if (!matchedProtected) {
    return NextResponse.next();
  }

  // Check authentication only for protected
  const auth = await getCurrentUser();
  if (!auth) {
    return NextResponse.redirect(
      new URL(`/login?callback=${pathname}`, req.url),
    );
  }

  // Check roles
  if (!matchedProtected.allowedRoles.includes(auth.user.role)) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}
