import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

type Props = {
  data: {
    accomodation: boolean;
    launch: boolean;
  };
};

export default function AvailableOption({ data }: Props) {
  return (
    <>
      <Card className="bg-stone-100/40">
        <CardHeader>
          <CardTitle
            className="text-2xl font-bold
            "
          >
            Posiłki {data.launch ? "✅" : "🚫"}
          </CardTitle>
          <CardDescription className="text-md">
            Masz wykupioną opcję na posiłki. Podczas konferencji będziesz miał
            możliwość skorzystania z trzech ciepłych posiłków dziennie.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="bg-stone-100/40">
        <CardHeader>
          <CardTitle
            className="text-2xl font-bold
          "
          >
            Zakwaterowanie {!data.accomodation ? "✅" : "🚫"}
          </CardTitle>
          <CardDescription className="text-md">
            Skorzystales z opcji zakwaterowanie, po naszej stonie bla bla bla
            bla some more dum text
          </CardDescription>
        </CardHeader>
      </Card>
    </>
  );
}
