import EventList from "@/components/eventList/EventList";
import Uczestnicy from "@/components/uczestkicy/Uczestnicy";

const eventList = [
  {
    title: "Start ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nemo iure eaque!",
    time: "09:00",
    id: "1",
  },
  {
    title: "Uwielbienie 🎵",
    time: "09:30",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nemo iure eaque!",
    id: "2",
  },
  {
    title: "Inspieracija ⛵",
    time: "10:40",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nemo iure eaque!",
    id: "3",
  },
  {
    title: "Przerwa",
    time: "11:30",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nemo iure eaque!",
    id: "4",
  },
  {
    title: "Szkolenie",
    time: "13:20",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nemo iure eaque!",
    id: "5",
  },
  {
    title: "Gry",
    time: "15:10",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nemo iure eaque!",
    id: "6",
  },
];

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <div className="container pt-12">
        <Uczestnicy />
        <div className="w-screen h-screen" />
        <EventList day="Czwartek" eventList={eventList} />
        <EventList day="Piatek" eventList={eventList} />
        <EventList day="Sobota" eventList={eventList} />
        <div className="w-screen h-screen" />
      </div>
    </main>
  );
}
