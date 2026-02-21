"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Login_logout from "../login_logout_button/login_logout";
import { ModeToggle } from "../theme/theme_toogle";
import { useAppSelector } from "@/lib/redux/hook";
import logo from "@/assets/image/logo.png";
import Image from "next/image";
import DropDownMenu from "./drop_down_menu";
const Navbar = () => {
  const { user } = useAppSelector((state) => state.auth);
  const pathname = usePathname();

  // Reusable active class
  const activeClass = " text-app-primary font-semibold px-2 py-0.5 rounded";
  const inactiveClass = "hover:text-app-primary text-app-secondary px-2 py-0.5";

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <div className="w-full h-full flex justify-between items-center p-2 bg-app-bg-third">
      <div>
        <Image width={110} alt="logo" src={logo}></Image>
      </div>

      <div className="flex items-center  gap-2  ">
        <Link href="/" className={isActive("/") ? activeClass : inactiveClass}>
          Home
        </Link>
        <Link
          href="/product"
          className={isActive("/product") ? activeClass : inactiveClass}
        >
          Product
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
        ></DropDownMenu>

        <DropDownMenu
          main_link="packages"
          class_name={isActive("/packages") ? activeClass : inactiveClass}
          options={[
            { label: "Combined Tour", value: "combined_tour" },

            { label: "Incentive Trips", value: "incentive_trip" },
          ]}
          title="Special Packages"
        ></DropDownMenu>

        {/* {user && (
          <Link
            href="/dashboard"
            className={isActive("/dashboard") ? activeClass : inactiveClass}
          >
            Dashboard
          </Link>
        )} */}
      </div>

      <div className="flex items-center gap-2">
        <Login_logout />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
