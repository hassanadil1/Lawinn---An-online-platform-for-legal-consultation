"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
   
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>

      <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Back To Home</HoveredLink>
          </div>
      </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Get Started">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Python">Python</HoveredLink>
          </div>
        </MenuItem>
       
        <MenuItem setActive={setActive} active={active} item="Forums">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/pythonforum">Python Forum</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Login / Signup">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Login">Login</HoveredLink>
            <HoveredLink href="/SignUp">Signup</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
   
  )
}

export default Navbar