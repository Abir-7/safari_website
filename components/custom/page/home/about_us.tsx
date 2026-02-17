import Image from "next/image";
import React from "react";
import about_one from "@/assets/image/home/about_1.jpg";
import about_two from "@/assets/image/home/about_2.jpg";

const AboutUs = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6 text-app-primary">
        About us{" "}
      </h1>

      <div className="relative">
        <div className="w-[329px] h-[493px] p-2 bg-white rounded-sm ">
          <Image
            width={400}
            height={400}
            src={about_one}
            className="h-full w-full object-cover  rounded-sm"
            alt=""
          ></Image>
        </div>
        <div className="w-[275px] top-12 left-40 rotate-12 h-[405px] p-2 bg-white rounded-sm absolute ">
          <Image
            width={400}
            height={400}
            src={about_two}
            className="h-full w-full object-cover  rounded-sm"
            alt=""
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
