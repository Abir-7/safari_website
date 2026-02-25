// utils/routeMatcher.ts

export function isProtectedRoute(
  pathname: string,
  protectedRoutes: { path: string }[],
) {
  return protectedRoutes.some((r) => {
    if (r.path.includes("*")) {
      const regexPath = "^" + r.path.replace(/\*/g, "[^/]+") + "$";
      const regex = new RegExp(regexPath);
      return regex.test(pathname);
    }

    return pathname === r.path || pathname.startsWith(r.path + "/");
  });
}
