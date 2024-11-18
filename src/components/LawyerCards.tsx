"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

export function LawyerCards() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={`https://images.pexels.com/photos/143580/pexels-photo-143580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Mister Zaid Spectre.
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Mr Zaid Spectre, is a reknowned Laywer, specially handles harassment cases regularly.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Hourly Consultancy: </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $1000/Hour
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
