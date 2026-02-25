import example from "@/assets/image/home/about_2.jpg";
import { C_Card } from "../../common/C_Card";

const demoThings = [
  {
    id: 1,
    title: "Nairobi National Park Game Drive",
    price: 50,
    description:
      "It is a place that seeks to secure our environment. Our main work is to carry out environment conserving initiatives.",
    image: example,
  },
  {
    id: 2,
    title: "Lake Safari Adventure",
    price: 70,
    description:
      "Experience breathtaking wildlife moments with our guided safari experience.",
    image: example,
  },
  {
    id: 3,
    title: "City Cultural Tour",
    price: 30,
    description:
      "Explore the cultural heart of the city with our expert local guides.",
    image: example,
  },
];

const ThingsToDo = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold text-app-primary">
        Things to do
      </h1>

      {/* Responsive Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {demoThings.map((item) => (
          <C_Card key={item.id} {...item} type="tickets" />
        ))}
      </div>
    </div>
  );
};

export default ThingsToDo;
