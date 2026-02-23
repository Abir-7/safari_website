import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

interface ContactInfo {
  country: string;
  address: string;
  poBox?: string;
  phone: string;
  email: string | string[];
  extraInfo?: string;
}

const contacts: ContactInfo[] = [
  {
    country: "UGANDA",
    address: "HAM Towers I Makerere Hill Road, 4th Floor, Room No. HT49",
    poBox: "P. O. Box 5019 Kampala (Uganda)",
    phone: "Tel: +256 786 933 173, +256 703 459 180",
    email: "Uganda@Gofunsafaris.Com",
  },
  {
    country: "KENYA",
    address: "Mwangi Place, Ground Floor, Kisauni Road, Nairobi West.",
    poBox: "P. O. Box 12681 — 00100 Nairobi",
    phone: "Phone: +254 722 677 475, +254 795 759 296 +254 702 267 424",
    email: "Shadrack@Gofunsafaris.Com",
  },
  {
    country: "TANZANIA",
    address: "Salei Road — Makao Mapya I P. O. Box 13498, Arusha, Tanzania",
    poBox: undefined,
    phone: "Tel: +255 27 2547195, +255 754 303 873",
    email: ["Info@ Ofansafaris.Com", "Info@Tanzaniacampingsafaris.Com"],
  },
  {
    country: "RWANDA",
    address:
      "God Is Able House, Room No 8, Airport — Road Opp. Hill Top Hotel & Country Club Kigali, Rwanda",
    poBox: undefined,
    phone: "Tel: +250 789 077 857, +250 780 869 075",
    email: "Rwanda@Gofunsafaris.Com",
  },
];

function Divider() {
  return <hr className="border-t border-[#c8b99a] my-3" />;
}

function ContactCard({ contact }: { contact: ContactInfo }) {
  const emails = Array.isArray(contact.email) ? contact.email : [contact.email];

  return (
    <div className="flex flex-col">
      <h3 className=" font-bold text-[#3b2a1a] tracking-widest text-xs mb-3 uppercase">
        {contact.country}
      </h3>
      <Divider />
      <p className="text-sm text-app-primary leading-relaxed">
        {contact.address}
      </p>
      {contact.poBox && (
        <>
          <Divider />
          <p className="text-sm text-app-primary">{contact.poBox}</p>
        </>
      )}
      <Divider />
      <p className="text-sm text-app-primary leading-snug">{contact.phone}</p>
      <Divider />
      {emails.map((email, i) => (
        <p key={i} className="text-sm text-app-primary">
          {i === 0 ? "Email: " : ""}
          <a
            href={`mailto:${email.trim()}`}
            className="hover:text-[#b5841b] transition-colors duration-200"
          >
            {email}
          </a>
        </p>
      ))}
      <Divider />
    </div>
  );
}

export default function FooterContact() {
  return (
    <footer className=" ">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 relative shrink-0">
              {/* Safari silhouette logo placeholder */}
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="23"
                  stroke="#3b2a1a"
                  strokeWidth="1.5"
                  fill="none"
                />
                {/* simplified giraffe/tree silhouette */}
                <path
                  d="M16 36V22l3-6 2 2 2-4 2 4 3-2 3 6v14"
                  stroke="#3b2a1a"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  fill="none"
                />
                <circle cx="24" cy="14" r="4" fill="#3b2a1a" />
              </svg>
            </div>
            <div>
              <div
                className="font-black text-[#3b2a1a] text-xl tracking-wider leading-none"
                style={{ fontFamily: "Georgia, serif" }}
              >
                GOFAN
              </div>
              <div className="text-[9px] text-app-primary tracking-widest uppercase leading-tight">
                Bureaus & Travel Bureau
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-app-primary leading-relaxed max-w-xs">
            Lorem ipsum dolor sit amet consectetur. Suspendisse sed quis sit
            lorem convallis pretium ut. Nunc fermentum id dictum et odio id.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-app-primary flex items-center justify-center text-[#FFFFFC] hover:bg-app-secondary transition-colors duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Grid — 2 columns spanning 2 cols */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-x-12">
          {contacts.map((contact) => (
            <ContactCard key={contact.country} contact={contact} />
          ))}
        </div>
      </div>
    </footer>
  );
}
