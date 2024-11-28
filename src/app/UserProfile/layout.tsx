import React from 'react';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";

import Navbar2 from '@/components/Navbar2';
interface SignUpLayoutProps {
    children: React.ReactNode;
}

const SignUpLayout: React.FC<SignUpLayoutProps> = ({ children }) => {
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

export default SignUpLayout;