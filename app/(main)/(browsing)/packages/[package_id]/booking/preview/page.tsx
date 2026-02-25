"use client";
import SafariDetailsCard from "@/components/custom/page/package_details/details_card";

import { SAFARI_IMAGES, SAFARI_PASS_DATA } from "../../page";
import BookingInfoSummary from "@/components/custom/page/preview/booking_info_summary";

const page = () => {
  return (
    <div className="space-y-8">
      <SafariDetailsCard
        showBooking={false}
        {...SAFARI_PASS_DATA}
        images={SAFARI_IMAGES}
      />
      <BookingInfoSummary></BookingInfoSummary>
    </div>
  );
};

export default page;
