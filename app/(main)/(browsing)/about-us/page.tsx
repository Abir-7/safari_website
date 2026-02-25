import MoreThanJustSafaris from "@/components/custom/page/about-us/more_then_just";
import AboutUs from "@/components/custom/page/home/about_us";
import ZooGallery from "@/components/custom/page/home/image_gallery";
import React from "react";

const page = () => {
  return (
    <div className="space-y-8">
      <AboutUs></AboutUs>
      <ZooGallery title="Our populer animals"></ZooGallery>
      <MoreThanJustSafaris></MoreThanJustSafaris>
    </div>
  );
};

export default page;
