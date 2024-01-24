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
          className="rounded-md"
          width={250}
          height={100}
          src={image}
          alt={name}
        />
        <CardDescription>Sponsor conferencji</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        {bookings.map((el) => (
          <Link
            className="bg-primary text-white px-4 py-2 rounded-xl"
            href={el.url}
          >
            {el.name}
          </Link>
        ))}
      </CardFooter>
    </Card>
  );
}
