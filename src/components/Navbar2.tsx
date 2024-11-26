"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { jwtDecode } from "jwt-decode";  // Correct import for `jwtDecode`
import Cookies from "js-cookie";

function Navbar2({
  className,
}: {
  className?: string;
}) {
  const [username, setUsername] = useState<string>("User");
  const [active, setActive] = useState<string | null>(null);

useEffect(() => {
  const token = localStorage.getItem("token"); // Get the token from localStorage
  if (token) {
    try {
      console.log("Token retrieved from localStorage:", token);  // Log the token
      const decoded: any = jwtDecode(token);  // Decode the JWT token
      console.log("Decoded token:", decoded);  // Log the decoded token
      setUsername(decoded.first_name || "User");  // Set the username
    } catch (error) {
      console.error("Error decoding token:", error);  // Log any decoding errors
    }
  }
}, []);


  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
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
        <MenuItem setActive={setActive} active={active} item={username}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/UserProfile">View Profile</HoveredLink>
            <HoveredLink href="/settings">Settings</HoveredLink>
            <HoveredLink href="/Login">Logout</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar2;
