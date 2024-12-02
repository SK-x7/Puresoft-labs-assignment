"use client";
import { Download } from "lucide-react";
import { getImage } from "../_lib/actions";
export default function Header() {
  return (
    <div className="w-full flex justify-between items-center pt-6 pb-5 border-b-2 border-gray-300">
      <span className=" sm:text-lg font-semibold">Reports</span>
      <div className="flex justify-center items-center gap-2 ">
        <Download className="h-4 w-4" />
        <button
          onClick={async () => {
            const b64str = await getImage();
            if (b64str) {
              localStorage.setItem("b64str", b64str);
              window.location.href = "/thankyou";
            }
          }}
        >
          Download
        </button>
      </div>
    </div>
  );
}
