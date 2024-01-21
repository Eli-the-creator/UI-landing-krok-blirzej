import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import AvailableOption from "./AvailableOption";
import { Button } from "../ui/button";

type Props = {
  data: {
    accomodation: boolean;
    launch: boolean;
  };
};

export default function PosilkiCard({ data }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-4xl fo">Dodatki</CardTitle>
        <CardDescription className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse totam
          culpa voluptate. Nemo labore alias optio tempora! Dicta est doloremque
          alias rem, eius esse.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-8">
          <AvailableOption data={data} />
        </div>
      </CardContent>
      <CardFooter>
        <Button size={"lg"} className="text-md font-semibold">
          Pobierz QR-CODE
        </Button>
      </CardFooter>
    </Card>
  );
}
