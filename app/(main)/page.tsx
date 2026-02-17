import AboutUs from "@/components/custom/page/home/about_us";
import Banner from "@/components/custom/page/home/banner";

const Page = () => {
  return (
    <div className="">
      {/* Wrapper with fixed height */}
      <div>
        <Banner></Banner>
      </div>
      <div className="mt-40 container mx-auto">
        <AboutUs></AboutUs>
      </div>
    </div>
  );
};

export default Page;
