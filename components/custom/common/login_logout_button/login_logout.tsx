"use client";

import { Button } from "@/components/ui/button";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";

import { useAppSelector } from "@/lib/redux/hook";

import Link from "next/link";

const Login_logout = () => {
  const { is_loading, user } = useAppSelector((state) => state.auth);
  if (is_loading) return null;

  return (
    <div>
      {user && user.id ? (
        <Link href={"/profile"}>
          <Avatar size="lg" className="">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
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
