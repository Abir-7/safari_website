import React from "react";

const tripDetails = [
  { label: "Departing From:", value: "Nairobi" },
  { label: "Duration:", value: "16 Days / 15 Nights" },
  {
    label: "Departure Time:",
    value: "0800 Hrs (possible to leave earlier than)",
  },
  { label: "Departures:", value: "Daily" },
  { label: "Minimum Persons Required:", value: "2" },
  { label: "Best Time:", value: "All the year round" },
];

const itinerary = [
  {
    day: "DAY 1: NAIROBI - MAASAI MARA.",
    content:
      "Across East African Safari rings t e world to explore the East African countries, best game parks of Tanzania, Kenya and Uganda fo nights in the best of Kenya national parks, 5 nights in the best northern Tanzania parks and 5 nights in the best of Uganda' national parks and also a night in Arusha town and in Kampala town, I the parks are home to small and large animals including birds and reptiles, lodge based safari.",
  },
  {
    day: "DAY 2: FULL DAY IN MAASAI MARA",
    content:
      "Full day game drives on the reserve, from 0830hrs to 1730hrs lunch picnic or back to the lodge for hot lunch and continue with afternoon game viewing. Dinner and Overnight at Mara Sopa Lodge or similar, FB.",
  },
  {
    day: "DAY 3: MAASAI MARA - LAKE NAKURU PARK",
    content:
      "After breakfast, drive from Mara to Nakuru with your lunch en-route. Arrive Nakuru Park in the evening and check in at your lodge or camping for dinner and overnight, FB.",
  },
  {
    day: "DAY 4: LAKE NAKURU - NAIROBI - ARUSHA TANZANIA",
    content:
      "At 0500hrs do early morning game drive in Nakuru Park, then at 0830 back to the lodge for your breakfast. There after drive back to Nairobi for lunch. At 1430hrs after lunch travel on via Namanga border into Arusha Tanzania where you will arrive at around 1800hrs. You will have dinner and overnight at Venus Premier Hotel Ngorongoro — Serengeti & Manyara Safari",
  },
  {
    day: "DAY 5: ARUSHA - NGORONGORO CRATER RIM",
    content:
      "In the morning at 0830hrs pick up from your accommodation in Arusha and drive I-0km to Ngorongoro Crater rim via some point of views. Hot lunch in the lodge and after lunch launch an easy walking trip along the Crater Rim for about 3 km enjoying the beauty scenery of the Ngorongoro highlands. Later walk back and meet your vehicle back to the lodge for dinner and overnight at Ngorongoro Rhino Lodge or Similar FB",
  },
  {
    day: "DAY 6: FULL DAY CRATER TOUR",
    content:
      "Breakfast then descend into the Crater floor for both morning and afternoon game drives. All the BIG FIVE Rhino Lion Leopard Buffalo and Elephant live in this wonderful caldera, others are Zebra Hippo Wildebeest Hyena and more. Birds includes flamingos on the Soda lake Geese Storks, Vultures and more. Your lunch will be served in the picnic site at Ngoitokitok swamp a Hippo pool. After lunch proceed with game viewing at 1645hrs ascend the Crater for dinner and overnight at Ngorongoro Rhino Lodge or Similar FB",
  },
];

const included = [
  "— Flying Doctors — Emergence air rescue from any point of the safari circuit",
  "— Arrival and departure Airport Transfers",
  "— All entrance fees.",
  "— Full-board accommodation on tour",
  "— Service of an English-speaking driver guide",
  "— Transport based on excellent Vehicle rebuilt for safari to give nice game viewing",
  "— Mileage is built in the price",
  "— Driver's Salary and allowances and park fees for vehicle and driver",
  "— Game drives as per the Itinerary",
  "— Complementary bottle of water daily",
  "— Complementary visit to a Masai village.",
  "- Complementary of printed Safari hat and T-shirt",
  "— Government taxes",
];

const excluded = [
  "- Extras at the lodges i.e. drinks, telephone, laundry, Internet etc.",
  "- International flight",
  "- Departure tax",
  "— Tips to drivers (highly recommended)",
  "- Visa, Travel Insurance",
];

export default function TripInfo() {
  return (
    <div className=" min-h-screen font-sans text-gray-800">
      <div className="w-full  mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* ── Trip Info Header ── */}
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
          Trip Info
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
          Across East African Safari rings t e world to explore the East African
          countries, best game parks of Tanzania, Kenya and Uganda fo nights in
          the best of Kenya national parks, 5 nights in the best northern
          Tanzania parks and 5 nights in the best of Uganda&apos; national parks
          and also a night in Arusha town and in Kampala town, I the parks are
          home to small and large animals including birds and reptiles, lodge
          based safari.
        </p>

        {/* ── Details Table ── */}
        <div className="border border-gray-200 rounded mb-8 overflow-hidden">
          {tripDetails.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col sm:flex-row text-xs sm:text-sm ${
                idx !== tripDetails.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <div className="sm:w-48 sm:shrink-0 pt-2.5 pb-0 sm:py-2.5 px-4 text-gray-500 font-medium sm:font-normal">
                {item.label}
              </div>
              <div className="pb-2.5 pt-0.5 sm:py-2.5 px-4 text-gray-800">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* ── Detailed Tour Itinerary ── */}
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-5">
          Detailed Tour Itinerary
        </h2>

        <div className="border border-gray-200 rounded overflow-hidden">
          {/*
            Mobile  → 1 column, every item has a bottom border except the last
            md+     → 2 columns, pairs share a row; right column has left border;
                       last row (last 2 items) has no bottom border
          */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {itinerary.map((item, idx) => {
              const total = itinerary.length;
              const isLastMobile = idx === total - 1;
              const isOdd = idx % 2 === 1; // right column on desktop
              // Last row on desktop = last pair (or lone item if odd total)
              const isLastDesktopRow = idx >= total - (total % 2 === 0 ? 2 : 1);

              return (
                <div
                  key={idx}
                  className={[
                    "p-4",
                    // Mobile border: all except last
                    !isLastMobile ? "border-b border-gray-200" : "",
                    // Desktop overrides
                    isOdd ? "md:border-l md:border-gray-200" : "",
                    // Desktop: restore bottom border for even-col items that are NOT in last row
                    !isOdd && !isLastDesktopRow
                      ? "md:border-b md:border-gray-200"
                      : "",
                    // Desktop: remove bottom border on last row items (override mobile rule)
                    isLastDesktopRow ? "md:border-b-0!" : "",
                    // Desktop: odd items in non-last rows also need bottom border
                    isOdd && !isLastDesktopRow
                      ? "md:border-b md:border-gray-200"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <h3 className="text-xs sm:text-sm font-bold text-amber-700 uppercase tracking-wide mb-2">
                    {item.day}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── What's Included & Package Excludes ── */}
        <div className="border border-gray-200 rounded mt-6 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* What's Included */}
            <div className="p-4 sm:p-5 border-b border-gray-200 sm:border-b-0 sm:border-r sm:border-gray-200">
              <h3 className="text-xs sm:text-sm font-bold text-gray-800 uppercase tracking-wide mb-3">
                WHAT&apos;S INCLUDED
              </h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                {included.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Package Excludes */}
            <div className="p-4 sm:p-5">
              <h3 className="text-xs sm:text-sm font-bold text-gray-800 uppercase tracking-wide mb-3">
                PACKAGE EXCLUDES
              </h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                {excluded.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
