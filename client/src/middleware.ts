import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
enum UserRole {
  ADMIN = "Admin",
  OWNER = "Owner",
  USER = "User",
}
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath =
    path === "/login" || path === "/signup" || path === "/verifyemail";
  const token = request.cookies.get("token")?.value || "";
  const userRole = getUserRole(token);
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
  // if (!isAuthorized(path, userRole)) {
  //   return NextResponse.redirect(new URL("/", request.nextUrl));
  // }
}
function getUserRole(token: string): UserRole {
  const decodedToken = decodeToken(token);
  return decodedToken.role;
}

function decodeToken(token: string): { role: UserRole } {
  return { role: UserRole.USER };
}

// function isAuthorized(path: string, userRole: UserRole): boolean {
//   const authorizedRoutes: Record<UserRole, string[]> = {
//     [UserRole.ADMIN]: ["/approvecar"],
//     [UserRole.OWNER]: ["/addcar"],
//     [UserRole.USER]: ["/rentcar"],
//   };

//   return authorizedRoutes[userRole]?.includes(path);
// }

export const config = {
  matcher: [
    "/",
    "/profile",
    "/login",
    "/signup",
    "/verifyemail",
    "/addcar",
    "/blog",
    "/contactus",
    "/approvecar",
    "/rentcar",
  ],
};
