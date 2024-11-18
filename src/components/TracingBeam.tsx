"use client";
import React from "react";
import { Poppins } from "@next/font/google";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

const poppins = Poppins({
  weight: ["600", "800"],
  subsets: ["latin"],
});

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>
            <p className={twMerge(poppins.className, "text-xl mb-4")}>
              {item.title}
            </p>
            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="law-related image"
                  height="1000"
                  width="1500"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Expand Your Client Reach",
    description: (
      <>
        <p>
          Showcase your expertise and attract clients by offering specialized
          legal services on our platform. Expand your practice with ease.
        </p>
        <p>Join a thriving network of lawyers ready to connect with clients.</p>
      </>
    ),
    badge: "Client Network",
    image: "https://images.pexels.com/photos/7841463/pexels-photo-7841463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Engage with a Legal Community",
    description: (
      <>
        <p>
          Collaborate and exchange insights on our forum. Grow your expertise
          through active discussions and support from a professional community.
        </p>
        <p>
          Stay updated with the latest legal trends and practices in your field.
        </p>
      </>
    ),
    badge: "Community Forum",
    image: "https://images.pexels.com/photos/3184399/pexels-photo-3184399.jpeg",
  },
  {
    title: "Leverage AI-Powered Legal Tools",
    description: (
      <>
        <p>
          Save time and enhance productivity with our AI legal assistant. Draft
          documents, find precedents, and resolve queries in seconds.
        </p>
        <p>
          Unlock tools designed to simplify your workflow and improve client
          outcomes.
        </p>
      </>
    ),
    badge: "AI Assistance",
    image: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
