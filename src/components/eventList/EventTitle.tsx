"use client";

import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { Dispatch, useEffect, useRef } from "react";

type Props = {
  title: string;
  description: string;
  setElement: Dispatch<string | undefined>;
};

export default function EventTitle({ title, description, setElement }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    setElement(title);
  }, [isInView]);

  return (
    <div className="py-8" ref={ref}>
      <h3
        className={cn(
          "text-5xl font-extrabold",
          isInView ? "text-stone-800" : "text-stone-300"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "text-2xl font-semibold text-gray-300",
          isInView ? "text-stone-600" : "text-stone-300"
        )}
      >
        {description}
      </p>
    </div>
  );
}
