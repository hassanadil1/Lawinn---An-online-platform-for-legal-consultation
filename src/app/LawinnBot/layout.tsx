import React from 'react';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Navbar2 from '@/components/Navbar2';
interface   LoginLayoutProps {
    children: React.ReactNode;
}

const  LoginLayout: React.FC<LoginLayoutProps> = ({ children }) => {
    return (
        <div className="signup-layout">
            <div className="relative w-full flex items-center justify-center">
                <Navbar2 />
            </div>
            <main>
                {children}
            </main>

        </div>
    );
};

export default LoginLayout;