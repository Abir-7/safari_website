/* eslint-disable react/no-children-prop */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Login_logout from "../login_logout_button/login_logout";
import { ModeToggle } from "../../theme/theme_toogle";
import { useAppSelector } from "@/lib/redux/hook";
import logo from "@/assets/image/logo.png";
import Image from "next/image";
import DropDownMenu from "./drop_down_menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface NavOption {
  label: string;
  value?: string;
  children?: { label: string; value: string }[];
}

interface MobileCollapsibleMenuProps {
  title: string;
  main_link: string;
  options: NavOption[];
  isActive: boolean;
  activeClass: string;
  inactiveClass: string;
  onClose: () => void;
}

// ---------------------------------------------------------------------------
// Sub-collapsible for nested children (e.g. Adventure → Desert / Mountain)
// ---------------------------------------------------------------------------
interface SubCollapsibleProps {
  label: string;
  main_link: string;
  children: { label: string; value: string }[];
  inactiveClass: string;
  onClose: () => void;
}

function SubCollapsible({
  label,
  main_link,
  children,
  inactiveClass,
  onClose,
}: SubCollapsibleProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className="w-full flex items-center justify-between px-2 py-1.5 rounded hover:bg-app-secondary/5">
        <span className={`text-sm ${inactiveClass}`}>{label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-app-secondary/60 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="flex flex-col pl-3 mt-0.5 gap-0.5 border-l border-app-secondary/10">
          {children.map((child) => (
            <Link
              key={child.value}
              href={`/${main_link}/${child.value}`}
              onClick={() => {
                setOpen(false);
                onClose();
              }}
              className={`block px-2 py-1.5 text-sm ${inactiveClass}`}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

// ---------------------------------------------------------------------------
// Mobile collapsible nav item (replaces DropDownMenu in drawer)
// ---------------------------------------------------------------------------
function MobileCollapsibleMenu({
  title,
  main_link,
  options,
  isActive,
  activeClass,
  inactiveClass,
  onClose,
}: MobileCollapsibleMenuProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className="w-full flex items-center justify-between py-1.5">
        <span className={isActive ? activeClass : inactiveClass}>{title}</span>
        <ChevronDown
          className={`w-4 h-4 text-app-secondary transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </CollapsibleTrigger>

      <CollapsibleContent>
        <div className="flex flex-col pl-4 mt-1 gap-0.5 border-l border-app-secondary/20">
          {options.map((opt) =>
            opt.children ? (
              // ── Sub-collapsible for nested children ──
              <SubCollapsible
                key={opt.label}
                label={opt.label}
                main_link={main_link}
                children={opt.children}
                inactiveClass={inactiveClass}
                onClose={onClose}
              />
            ) : (
              <Link
                key={opt.value}
                href={`/${main_link}?${opt.value}`}
                onClick={() => {
                  setOpen(false);
                  onClose();
                }}
                className={`block px-2 py-1.5 text-sm ${inactiveClass}`}
              >
                {opt.label}
              </Link>
            ),
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

// ---------------------------------------------------------------------------
// Navbar
// ---------------------------------------------------------------------------
const Navbar = () => {
  const { user } = useAppSelector((state) => state.auth);
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const activeClass = "text-app-primary font-semibold px-2 py-0.5 rounded";
  const inactiveClass = "hover:text-app-primary text-app-secondary px-2 py-0.5";

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  // Desktop nav — keeps original DropDownMenu
  const desktopNavLinks = (
    <>
      <Link href="/" className={isActive("/") ? activeClass : inactiveClass}>
        Home
      </Link>

      <DropDownMenu
        main_link="safaries"
        class_name={isActive("/safaries") ? activeClass : inactiveClass}
        options={[
          { label: "Wildlife", value: "wildlife" },
          {
            label: "Adventure",
            children: [
              { label: "Desert Safari", value: "desert" },
              { label: "Mountain Trek", value: "mountain" },
            ],
          },
          { label: "Cultural", value: "cultural" },
        ]}
        title="Safairies"
      />
      <DropDownMenu
        main_link="packages"
        class_name={isActive("/packages") ? activeClass : inactiveClass}
        options={[
          { label: "Combined Tour", value: "combined_tour" },
          { label: "Incentive Trips", value: "incentive_trip" },
        ]}
        title="Special Packages"
      />
      <DropDownMenu
        main_link="experiences"
        class_name={isActive("/experiences") ? activeClass : inactiveClass}
        options={[
          { label: "Activities", value: "activities" },
          { label: "Gallery", value: "gallery" },
        ]}
        title="Experiences"
      />
      <Link
        href="/about-us"
        className={isActive("/about-us") ? activeClass : inactiveClass}
      >
        About Us
      </Link>
      {user && (
        <Link
          href="/booking-history"
          className={`block py-1.5 ${isActive("/booking-history") ? activeClass : inactiveClass}`}
        >
          Booking History
        </Link>
      )}
    </>
  );

  // Mobile nav — uses MobileCollapsibleMenu instead of DropDownMenu
  const mobileNavLinks = (
    <>
      <Link
        href="/"
        onClick={() => setMobileOpen(false)}
        className={`block py-1.5 ${isActive("/") ? activeClass : inactiveClass}`}
      >
        Home
      </Link>

      <MobileCollapsibleMenu
        title="Safairies"
        main_link="safaries"
        isActive={isActive("/safaries")}
        activeClass={activeClass}
        inactiveClass={inactiveClass}
        onClose={() => setMobileOpen(false)}
        options={[
          { label: "Wildlife", value: "wildlife" },
          {
            label: "Adventure",
            children: [
              { label: "Desert Safari", value: "desert" },
              { label: "Mountain Trek", value: "mountain" },
            ],
          },
          { label: "Cultural", value: "cultural" },
        ]}
      />
      <MobileCollapsibleMenu
        title="Special Packages"
        main_link="packages"
        isActive={isActive("/packages")}
        activeClass={activeClass}
        inactiveClass={inactiveClass}
        onClose={() => setMobileOpen(false)}
        options={[
          { label: "Combined Tour", value: "combined_tour" },
          { label: "Incentive Trips", value: "incentive_trip" },
        ]}
      />
      <MobileCollapsibleMenu
        title="Experiences"
        main_link="experiences"
        isActive={isActive("/experiences")}
        activeClass={activeClass}
        inactiveClass={inactiveClass}
        onClose={() => setMobileOpen(false)}
        options={[
          { label: "Activities", value: "activities" },
          { label: "Gallery", value: "gallery" },
        ]}
      />
      <Link
        onClick={() => setMobileOpen(false)}
        href="/about-us"
        className={isActive("/about-us") ? activeClass : inactiveClass}
      >
        About Us
      </Link>
      {user && (
        <Link
          href="/booking-history"
          onClick={() => setMobileOpen(false)}
          className={`block py-1.5 ${isActive("/booking-history") ? activeClass : inactiveClass}`}
        >
          Booking History
        </Link>
      )}
    </>
  );

  return (
    <Collapsible
      open={mobileOpen}
      onOpenChange={setMobileOpen}
      className="w-full bg-app-bg-third px-8"
    >
      {/* ── Main bar ── */}
      <div className="flex justify-between items-center p-2 h-full">
        {/* Logo */}
        <div>
          <Image width={110} alt="logo" src={logo} />
        </div>

        {/* Desktop nav links — hidden on mobile/tablet */}
        <div className="hidden lg:flex items-center gap-2">
          {desktopNavLinks}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2">
            <Login_logout />
          </div>
          {/* <ModeToggle /> */}

          {/* Hamburger trigger */}
          <CollapsibleTrigger asChild>
            <button
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-app-secondary transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-app-secondary transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-app-secondary transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </CollapsibleTrigger>
        </div>
      </div>

      {/* ── Mobile / Tablet drawer ── */}
      <CollapsibleContent className="lg:hidden shadow">
        <div className="flex flex-col gap-1 px-4 pt-2 pb-4">
          {mobileNavLinks}

          {/* Login button inside drawer on mobile */}
          <div className="sm:hidden mt-2 border-t border-app-secondary/20 pt-3">
            <Login_logout />
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default Navbar;
