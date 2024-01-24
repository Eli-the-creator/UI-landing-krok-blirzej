import Image, { StaticImageData } from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

interface Hotel {
  hotel: {
    name: string;
    address: string;
    image: string | StaticImageData;
    google_maps_link: string;
    bookings: { name: string; url: string }[];
  };
}

export default function MapPopover(props: Hotel) {
  const { address, name, image, google_maps_link, bookings } = props.hotel;
  return (
    <Card className="max-w-[300px] border rounded-xl">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{address}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          className="rounded-md mb-2"
          width={250}
          height={100}
          src={image}
          alt={name}
        />
        <CardDescription>
          <Link
            href={google_maps_link}
            target="_black"
            className="text-sky-900 underline font-semibold text-md"
          >
            Zobacz lokalizacje
          </Link>
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col gap-y-2">
        {bookings.map((el) => (
          <Link
            target="_black"
            className="bg-sky-300 w-full text-center py-1 rounded-md font-semibold"
            href={el.url}
          >
            {el.name}
          </Link>
        ))}
      </CardFooter>
    </Card>
  );
}
