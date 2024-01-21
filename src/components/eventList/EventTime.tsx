import { ArrowLeft } from "lucide-react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function EventTime({ children }: Props) {
  return (
    <div className="">
      <div className="sticky top-1/2 -translate-y-1/2 flex items-center w-full z-10">
        <span>
          <ArrowLeft className="w-9 h-9" />
        </span>
        <p className="text-7xl font-bold text-stone-800">{children}</p>
      </div>
    </div>
  );
}
