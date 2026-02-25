"use client";

import { useRouter, usePathname } from "next/navigation";
import { useAppDispatch } from "@/lib/redux/hook";
import { clearAuth } from "@/lib/redux/features/authSlice/auth_slice";
import { logout } from "@/action/session.actions";

import { isProtectedRoute } from "@/utils/routeMatcher";
import { protected_routes } from "@/const/route/protected_routes";

export function useLogout() {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  return async function handleLogout() {
    await logout();

    dispatch(clearAuth());

    const isProtected = isProtectedRoute(pathname, protected_routes);

    if (isProtected) {
      router.replace(`/login?callback=${encodeURIComponent(pathname)}`);
    } else {
      router.refresh();
    }
  };
}
