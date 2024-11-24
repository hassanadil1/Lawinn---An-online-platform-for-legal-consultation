"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar2({
  className,
  username = "User",
}: {
  className?: string;
  username?: string;
}) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >

      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/ClientView">Gigs</HoveredLink>
          </div>
        </MenuItem>


        <MenuItem setActive={setActive} active={active} item="Ask LawInn">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/LawinnBot">LawInn AI</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Forums">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Forum">LawInn Forum</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Exit">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="Login">Logout</HoveredLink>
          </div>
        </MenuItem>

        {/* Username Profile Menu Item */}
        <MenuItem setActive={setActive} active={active} item={username}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/UserProfile">View Profile</HoveredLink>
            <HoveredLink href="/settings">Settings</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar2;
