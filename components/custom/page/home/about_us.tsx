import Image from "next/image";
import React from "react";
import about_one from "@/assets/image/home/about_1.jpg";
import about_two from "@/assets/image/home/about_2.jpg";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <div className=" ">
      <h1 className="text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold mb-6 text-app-primary">
        About us{" "}
      </h1>

      <div className="flex flex-col lg:flex-row ">
        {/* image section */}
        <div className=" lg:w-[1500px] ">
          <div className="relative  w-fit    ">
            <div className="w-full  lg:w-60 xl:w-80 aspect-4/3 lg:aspect-2/3 p-2 bg-white rounded-sm  ">
              <Image
                width={400}
                height={400}
                src={about_one}
                className="h-full w-full object-cover  rounded-sm"
                alt=""
              ></Image>
            </div>
            <div
              className="
            absolute

w-60  sm:w-80 lg:w-48 xl:w-64
aspect-4/3 lg:aspect-2/3

/* Mobile (default) */
left-1/2 top-[85%] 
-translate-x-1/2

/* MD */
md:left-4/2 
md:top-1/2
md:-translate-x-3/2
md:-translate-y-1/2

/* LG */
lg:left-24
lg:top-9
lg:translate-x-0
lg:translate-y-0
lg:rotate-12

/* XL */
xl:top-13
xl:left-36
hidden
md:block

p-2 bg-white rounded-lg
              
              "
            >
              <Image
                width={400}
                height={400}
                src={about_two}
                className="h-full w-full object-cover rounded-sm"
                alt=""
              ></Image>
            </div>
          </div>
        </div>
        {/* info section */}
        <div className="space-y-4 xl:col-span-2">
          <h1 className=" mt-10 lg:mt-0 text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">
            Experience the Wild Up Close
          </h1>
          <p className="text-app-accent">
            Step into a world where nature thrives and wildlife roams freely.
            Our safari park offers a safe, immersive environment to explore
            diverse animals, scenic landscapes, and unforgettable
            adventures—while promoting conservation, education, and respect for
            nature.
          </p>
          <div className="text-app-accent space-y-2 xl:space-y-4">
            <p className="flex gap-2 ">
              <span className="mt-0.5">
                <Check
                  size={20}
                  className=" bg-app-bg-secondary text-white rounded-full p-0.5"
                ></Check>
              </span>
              <span>
                Authentic Wildlife Habitats - Designed to reflect natural
                environments for animal well-being
              </span>
            </p>
            <p className="flex gap-2 ">
              <span className="mt-0.5">
                <Check
                  size={20}
                  className="  bg-app-bg-secondary text-white rounded-full p-0.5"
                ></Check>
              </span>
              <span>
                Conservation & Education - Promoting awareness and protection of
                wildlife
              </span>
            </p>
            <p className="flex gap-2 ">
              <span className="mt-0.5">
                <Check
                  size={20}
                  className="  bg-app-bg-secondary text-white rounded-full p-0.5"
                ></Check>
              </span>
              <span>
                Unforgettable Adventures - Guided safaris, scenic views, and
                family-friendly experiences
              </span>
            </p>

            <Button className=" mt-5 bg-app-primary hover:bg-app-secondary text-white">
              About Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
