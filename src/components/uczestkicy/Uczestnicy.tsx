import React from "react";
import { Button } from "../ui/button";
import PosilkiCard from "./DodatkiCard";

export default function Uczestnicy() {
  const data = {
    id: "794edcc3-6762-45bb-8499-6ee15f39d353",
    accomodation: true,
    launch: true,
    launchTaken: false,
    selectedLaunch: "vege",
    code: "6d95808e",
    person: {
      id: "62b035d4-c59e-440a-b2be-60670ff550d3",
      ticketId: "794edcc3-6762-45bb-8499-6ee15f39d353",
      name: "Paweł",
      lastName: "Bul",
      email: "pawelbul01@gmail.com",
      phoneNumber: "539630020",
      language: "pl",
    },
  };

  const extaraStuff = {
    accomodation: data.accomodation,
    launch: data.launch,
  };

  return (
    <div className="flex flex-col mt-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Hejka, {data.person.name}</h1>
        <p className="text-xl text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
          cumque, commodi nesciunt, odio architecto, soluta reiciendis ad rerum
          cum vitae sunt quo ea. Eum.
        </p>
      </div>

      <div className="flex flex-col gap-11 lg:flex-row xl:flex-row ">
        <div className="w-full h-full bg-stone-200  animate-pulse duration-600">
          <div className="aspect-square">
            <p>QR_CODE</p>
          </div>
        </div>

        <PosilkiCard data={extaraStuff} />
      </div>
    </div>
  );
}
