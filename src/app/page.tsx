import EventList from "@/components/eventList/EventList";
import MapPopover from "@/components/map-popover/MapPopover";
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

const fakeHotelData = {
  name: "Luxury Hotel Opole",
  address: "123 Main Street, Cityville",
  image: "/test.jpg", // Replace with the actual path or StaticImageData
  google_maps_link: "https://maps.google.com/?q=123+Main+Street",
  bookings: [
    { name: "Booking.com", url: "https://www.booking.com/luxury-resort" },
    { name: "Expedia", url: "https://www.expedia.com/luxury-resort" },
    // Add more booking platforms as needed
  ],
};

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <div className="container pt-12">
        <MapPopover hotel={fakeHotelData} />
      </div>
    </main>
  );
}
//
