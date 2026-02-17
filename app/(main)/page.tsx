import Image from "next/image";
import banner from "@/assets/image/home/banner.png";

const Page = () => {
  return (
    <div className="bg-red-100">
      {/* Wrapper with fixed height */}
      <div className="w-full relative md:h-[40vh] lg:h-[48vh] xl:h-[67vh] overflow-hidden bg-lime-100">
        <Image
          src={banner}
          alt="banner img"
          className="object-cover w-auto md:[38vh] lg:h-[46vh] xl:h-[66vh] absolute bottom-0 left-1/2
          transform -translate-x-1/2"
          priority
        />
      </div>
    </div>
  );
};

export default Page;
