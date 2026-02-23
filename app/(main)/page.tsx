import AboutUs from "@/components/custom/page/home/about_us";
import Banner from "@/components/custom/page/home/banner";
import FooterContact from "@/components/custom/common/footer/contact";
import ZooGallery from "@/components/custom/page/home/image_gallery";

import SearchBooking from "@/components/custom/page/home/search_booking";
import ThingsToDo from "@/components/custom/page/home/things_to_do";

const Page = () => {
  return (
    <div className="">
      {/* Wrapper with fixed height */}
      <div className="relative">
        <Banner></Banner>
        <div className="mt-10 px-5  sm:p-0 sm:max-w-2xl md:max-w-2xl lg:max-w-3xl mx-auto xl:max-w-5xl 2xl:max-w-7xl absolute w-full left-1/2 -translate-x-1/2 -bottom-30">
          <SearchBooking></SearchBooking>
        </div>
      </div>

      <div className="mt-38 px-5  sm:p-0 sm:max-w-2xl md:max-w-2xl lg:max-w-3xl mx-auto xl:max-w-5xl 2xl:max-w-7xl">
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
