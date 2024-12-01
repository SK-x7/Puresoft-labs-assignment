"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function Page() {
  const [b64str, setB64str] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const imageStr = localStorage.getItem("b64str");
      setB64str(imageStr);
    }
  }, []);

  if (!b64str) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="spinner"></div>
        <p>Preparing Your Image</p>
      </div>
    );
  }

  return (
    <main className=" h-screen flex justify-center items-start py-5">
      <div className="flex flex-col h-2/3 sm:h-full sm:justify-center  gap-3">
        <h1 className="text-xl sm:text-3xl font-sans text-blue-500">
          Thank you for visiting our website, here is your image
        </h1>

        <div className="!relative h-5/6 w-full flex !justify-center !items-center">
          <Image
            className="!object-cover  rounded-md"
            fill
            src={`data:image/png;base64,${b64str}`}
            alt="Base64"
          />
        </div>
        <a
          className="bg-blue-400 text-black px-4  py-3 rounded-xl text-center hover:bg-blue-500"
          href={`data:image/png;base64,${b64str}`}
          download="image.png"
        >
          <button>Download Image</button>
        </a>
      </div>
    </main>
  );
}

export default Page;
