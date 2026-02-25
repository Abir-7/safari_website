import AboutUs from "@/components/custom/page/home/about_us";
import Banner from "@/components/custom/page/home/banner";

import ZooGallery from "@/components/custom/page/home/image_gallery";

import SearchBooking from "@/components/custom/page/home/search_booking";
import ThingsToDo from "@/components/custom/page/home/things_to_do";

const Page = () => {
  return (
    <div className="">
      {/* Wrapper with fixed height */}
      <div className="relative">
        <Banner></Banner>
        <div
          className="mt-10 px-5 mx-auto  sm:p-0 sm:max-w-2xl  md:max-w-3xl  xl:max-w-5xl 2xl:max-w-7xl 
        md:absolute 
        w-full 
         md:left-1/2 
        md:-translate-x-1/2 
        2xl:-bottom-30 
      
               -bottom-60 
        "
        >
          <SearchBooking></SearchBooking>
        </div>
      </div>

      <div className="mt-10 md:mt-72 2xl:mt-38 px-5  sm:p-0 sm:max-w-2xl md:max-w-2xl lg:max-w-3xl mx-auto xl:max-w-5xl 2xl:max-w-7xl">
        <AboutUs></AboutUs>
      </div>
      <div className="mt-10 px-5  sm:p-0 sm:max-w-2xl md:max-w-2xl lg:max-w-3xl mx-auto xl:max-w-5xl 2xl:max-w-7xl">
        <ThingsToDo></ThingsToDo>
      </div>
      <div className="mt-10 px-5  sm:p-0 sm:max-w-2xl md:max-w-2xl lg:max-w-3xl mx-auto xl:max-w-5xl 2xl:max-w-7xl">
        <ZooGallery></ZooGallery>
      </div>
    </div>
  );
};

export default Page;
