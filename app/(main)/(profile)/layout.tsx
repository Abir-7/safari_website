"use client";
import ProfileCard from "@/components/custom/page/profile/profile_card";
import { useLogout } from "@/hooks/useLogout";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const logout = useLogout();
  return (
    <div className="mt-10 px-5 sm:p-0 sm:max-w-2xl md:max-w-2xl lg:max-w-3xl mx-auto xl:max-w-5xl 2xl:max-w-7xl">
      <div className="flex  gap:4 lg:gap-10 lg:flex-row flex-col">
        <div>
          <ProfileCard onLogout={logout}></ProfileCard>
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
