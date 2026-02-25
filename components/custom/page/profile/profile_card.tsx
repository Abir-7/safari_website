"use client";

import Image from "next/image";
import { Camera, ClipboardEdit, ShieldCheck, LogOut } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
    <div className="w-full lg:w-72 rounded-2xl px-4 lg:px-2 py-4 lg:py-8 bg-app-bg-third">
      {/* Avatar + Name */}
      <div className="flex  flex-row lg:flex-col items-center lg:items-center gap-4 lg:gap-0 mb-4 lg:mb-6">
        <div className="relative ">
          <div className="h-16 w-16 lg:h-20 lg:w-20 rounded-full overflow-hidden ring-2 ring-white shadow-md">
            <Image
              src={avatarUrl}
              alt={name}
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Camera Button */}
          <button
            onClick={handleCameraClick}
            className="absolute bottom-0 right-0 flex h-5 w-5 lg:h-6 lg:w-6 items-center justify-center rounded-full bg-white shadow border border-neutral-200 hover:bg-neutral-50 transition-colors"
            aria-label="Change profile picture"
          >
            <Camera
              className="h-3 w-3 lg:h-3.5 lg:w-3.5 text-neutral-600"
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

        <div className="flex flex-col lg:text-center">
          <h2 className="text-xl lg:text-2xl  font-bold mt-2 text-neutral-900">
            {name}
          </h2>
          <p className="text-xs lg:text-sm text-neutral-400">{email}</p>
        </div>
      </div>

      {/* <Separator className="hidden lg:block mb-4" /> */}

      {/* Menu Items */}
      <nav className="flex flex-row lg:flex-col gap-2 lg:gap-1 justify-between lg:justify-start">
        {menuItems.map((item, index) => {
          const isActive =
            pathname === item.href || pathname.startsWith(item.href);

          return (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center text-[16px] gap-2 lg:gap-3 rounded-xl px-3 py-2 lg:py-3 text-sm font-semibold transition-colors
                ${isActive ? "text-app-primary font-bold" : "text-neutral-800 hover:text-app-primary"}`}
            >
              {item.icon}
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          );
        })}

        {/* Logout */}
        <LogoutModal onLogout={onLogout} />
      </nav>
    </div>
  );
}

interface LogoutModalProps {
  onLogout?: () => void;
}

const LogoutModal = ({ onLogout }: LogoutModalProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="flex items-center gap-2 lg:gap-3 rounded-xl px-3 py-2 lg:py-3 text-sm font-semibold text-app-secondary hover:text-app-primary transition-colors">
          <LogOut className="h-5 w-5" strokeWidth={1.8} />
          <span className="hidden sm:inline text-[16px]">Logout</span>
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent className="rounded-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action will log you out of your account.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel className="rounded-xl">Cancel</AlertDialogCancel>

          <AlertDialogAction
            onClick={onLogout}
            className="  text-white rounded-xl bg-red-600 hover:bg-red-500"
          >
            Logout
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
