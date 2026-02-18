import Image from "next/image";
import React from "react";
import about_one from "@/assets/image/home/about_1.jpg";
import about_two from "@/assets/image/home/about_2.jpg";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <div className=" ">
      <h1 className="md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold mb-6 text-app-primary">
        About us{" "}
      </h1>

      <div className="flex flex-col lg:flex-row ">
        {/* image section */}
        <div className="h-96 md:h-fit lg:w-[1500px] xl:w-[1600px]">
          <div className="relative  w-fit    ">
            <div className="w-full md:w-96 lg:w-60 xl:w-80 aspect-4/3 lg:aspect-2/3 p-2 bg-white rounded-sm  ">
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

w-64 sm:w-72 md:w-80 lg:w-48 xl:w-64
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
        <div className="space-y-4 xl:col-span-2 xl:text-[18px] 2xl:text-[20px]">
          <h1 className=" mt-10 lg:mt-0 md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">
            Experience the Wild Up Close
          </h1>
          <p className="text-app-accent-light">
            Step into a world where nature thrives and wildlife roams freely.
            Our safari park offers a safe, immersive environment to explore
            diverse animals, scenic landscapes, and unforgettable
            adventures—while promoting conservation, education, and respect for
            nature.
          </p>
          <div className="text-app-accent-light space-y-2 xl:space-y-4">
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
