import Image from "next/image";
import banner_img from "@/assets/image/home/banner.png";

const Banner = () => {
  return (
    <div className="w-full relative h-[30vh] md:h-[50vh] lg:h-[58vh] xl:h-[67vh] overflow-hidden bg-lime-100">
      <Image
        src={banner_img}
        alt="banner img"
        className="object-cover h-[29vh] w-auto md:h-[48vh] lg:h-[56vh] xl:h-[66vh] absolute bottom-0 left-1/2
          transform -translate-x-1/2"
        priority
      />
    </div>
  );
};

export default Banner;
