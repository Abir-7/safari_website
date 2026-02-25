"use client";

import Image from "next/image";
import { Camera, ClipboardEdit, ShieldCheck, LogOut } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ProfileCardProps {
  name?: string;
  email?: string;
  avatarUrl?: string;
  onLogout?: () => void;
  onAvatarChange?: (file: File) => void;
}

export default function ProfileCard({
  name = "Jenny Smith",
  email = "jenny@gmail.com",
  avatarUrl = "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg",
  onLogout,
  onAvatarChange,
}: ProfileCardProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onAvatarChange) {
      onAvatarChange(file);
    }
  };

  const menuItems = [
    {
      icon: <ClipboardEdit className="h-5 w-5" strokeWidth={1.8} />,
      label: "Account Information",
      href: "/profile",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" strokeWidth={1.8} />,
      label: "Privacy & Policy",
      href: "/privacy-policy",
    },
  ];

  return (
    <div className="md:w-72 rounded-3xl px-6 py-8 bg-app-bg-third">
      {/* Avatar */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative mb-3">
          <div className="h-20 w-20 rounded-full overflow-hidden ring-2 ring-white shadow-md">
            <Image
              src={avatarUrl}
              alt={name}
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </div>

          <button
            onClick={handleCameraClick}
            className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow border border-neutral-200 hover:bg-neutral-50 transition-colors"
          >
            <Camera
              className="h-3.5 w-3.5 text-neutral-600"
              strokeWidth={1.8}
            />
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        <h2 className="text-base font-bold text-neutral-900">{name}</h2>
        <p className="text-sm text-neutral-400">{email}</p>
      </div>

      <Separator className="mb-4" />

      {/* Menu Items */}
      <nav className="flex flex-col gap-1">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <Link
              href={item.href}
              key={index}
              className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition-colors
                ${
                  isActive
                    ? "bg-amber-100 text-amber-700"
                    : "text-neutral-800 hover:bg-neutral-50"
                }`}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Separator className="my-4" />

      {/* Logout Separate */}
      <button
        onClick={onLogout}
        className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors"
      >
        <LogOut className="h-5 w-5" strokeWidth={1.8} />
        Logout
      </button>
    </div>
  );
}
