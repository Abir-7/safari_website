"use client";

import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";

interface DropdownOption {
  label: string;
  value?: string;
  children?: DropdownOption[];
}

interface DropDownMenuProps {
  class_name?: string;
  options: DropdownOption[];
  title: string;
  main_link: string;
}

const DropDownMenu = ({
  class_name,
  options,
  title,
  main_link,
}: DropDownMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          className={`${class_name} hover:no-underline text-base font-normal flex items-center gap-1 focus-visible:ring-0`}
        >
          {title}
          <ChevronDown
            className={`transition-transform duration-200 ${
              open ? "rotate-180" : "rotate-0"
            }`}
            size={18}
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-app-bg-color min-w-48">
        {options.map((option) =>
          option.children ? (
            // 🔹 Render Sub Menu
            <DropdownMenuSub key={option.label}>
              <DropdownMenuSubTrigger>{option.label}</DropdownMenuSubTrigger>

              <DropdownMenuSubContent className="bg-app-bg-color min-w-48">
                {option.children.map((child) => (
                  <DropdownMenuItem key={child.value} asChild>
                    <Link
                      href={`/${main_link}?type=${child.value}`}
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          ) : (
            // 🔹 Normal Item
            <DropdownMenuItem key={option.value} asChild>
              <Link
                href={`/${main_link}?type=${option.value}`}
                onClick={() => setOpen(false)}
              >
                {option.label}
              </Link>
            </DropdownMenuItem>
          ),
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownMenu;
