"use client";

import { Button } from "@/components/ui/button";
import { useLogout } from "@/hooks/useLogout";

import { useAppSelector } from "@/lib/redux/hook";

import Link from "next/link";

const Login_logout = () => {
  const logout = useLogout();

  const { is_loading, user } = useAppSelector((state) => state.auth);
  if (is_loading) return null;

  return (
    <div>
      {user && user.id ? (
        <Button
          onClick={logout}
          className="bg-app-secondary hover:bg-app-primary text-white"
        >
          Logout
        </Button>
      ) : (
        <Link href={"/login"}>
          {" "}
          <Button className="bg-app-secondary hover:bg-app-primary text-white">
            Login
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Login_logout;
