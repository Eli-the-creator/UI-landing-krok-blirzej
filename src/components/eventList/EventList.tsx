"use client";

import { useState } from "react";
import EventTime from "./EventTime";
import EventTitle from "./EventTitle";

type Props = {
  day: string;
  eventList: {
    title: string;
    time: string;
    description: string;
    id: string;
  }[];
};

export default function EventList({ day, eventList }: Props) {
  const [element, setElement] = useState<string | undefined>();

  const activeElement = eventList.find((el) => el.title === element);

  return (
    <div className="py-42">
      <div className="h-64 top-0 bg-white sticky flex items-start z-30" />
      <div className="transition-all duration-650 relative px-6 ">
        <div className="flex flex-col w-full gap-20">
          <div className="w-full top-64 sticky flex items-start z-30">
            <div className="w-full py-6 px-12 bg-gradient-to-tl from-sky-300 to-sky-600 rounded-lg">
              <h3 className="text-4xl text-white font-black">{day}</h3>
            </div>
          </div>

          <div className="flex w-full gap-4">
            <div className="w-full">
              <ul className="">
                {eventList.map((el) => (
                  <span>
                    <li key={el.id} className="py-10">
                      <EventTitle
                        setElement={setElement}
                        title={el.title}
                        description={el.description}
                      />
                    </li>
                  </span>
                ))}
              </ul>
            </div>
            <EventTime>{activeElement?.time}</EventTime>
          </div>
        </div>
      </div>
    </div>
  );
}
