import React from "react";
import Image from "next/image";
import footer_image from "@/assets/image/footer.png";
import FooterContact from "./contact";
const Footer = () => {
  return (
    <div>
      <div className="mt-10 px-5 sm:p-0 sm:max-w-2xl md:max-w-2xl lg:max-w-3xl mx-auto xl:max-w-5xl 2xl:max-w-7xl">
        <FooterContact></FooterContact>
      </div>
      <div className="w-full">
        <Image src={footer_image} alt="footer" className="w-full" />
      </div>
    </div>
  );
};

export default Footer;
