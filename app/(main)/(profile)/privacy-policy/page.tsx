"use client";

const sections = [
  {
    id: 1,
    title: "Information We Collect",
    items: [
      {
        label: "Personal Information",
        detail:
          "Name, email address, phone number, and payment details provided during registration or booking.",
      },
      {
        label: "Usage Data",
        detail:
          "Information about how you interact with our app, including pages visited, features used, and time spent.",
      },
      {
        label: "Device Information",
        detail:
          "IP address, browser type, operating system, and other technical identifiers.",
      },
    ],
  },
  {
    id: 2,
    title: "How They Use and Share Your Data",
    items: [
      {
        label: "Use",
        detail:
          "To maintain and improve app functionality, manage billing, support user accounts, and for internal analytics.",
      },
      {
        label: "Sharing",
        detail: "Your data may be shared with:",
        subItems: [
          "Affiliates or partners (e.g., during business transfers such as mergers or acquisitions)",
          "Legal authorities if required by law",
          "Third-party service providers (e.g., payment processors), who are contractually bound to follow the privacy policy",
        ],
      },
      {
        label: "International Transfers",
        detail:
          "Data is stored and processed in the United States, and by using the app, you consent to such transfers—even from countries with stricter privacy laws.",
      },
    ],
  },
  {
    id: 3,
    title: "Data Retention & Security",
    items: [
      {
        label: "Retention Period",
        detail: "",
        subItems: [
          "Service-related data and usage logs: retained for up to 12 months or as law mandates",
          "Billing and invoice records: retained up to 7 years",
          "Customer support records: retained for around 3 years",
        ],
      },
      {
        label: "Security Measures",
        detail:
          "They implement industry-standard protocols like encryption and secure servers to protect your personal data. However, no method is entirely foolproof.",
      },
    ],
  },
  {
    id: 4,
    title: "Your Rights",
    items: [
      {
        label: "Access & Correction",
        detail:
          "You may request access to or correction of your personal data at any time through your account settings.",
      },
      {
        label: "Deletion",
        detail:
          "You can request deletion of your account and associated data, subject to legal retention obligations.",
      },
      {
        label: "Opt-Out",
        detail:
          "You may opt out of marketing communications at any time by following the unsubscribe link in emails.",
      },
    ],
  },
];

function BulletItem({
  label,
  detail,
  subItems,
}: {
  label: string;
  detail: string;
  subItems?: string[];
}) {
  return (
    <li className="flex gap-2 text-sm text-app-secondary leading-relaxed ">
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-app-secondary" />
      <div>
        <span>
          <span className="font-medium  text-app-secondary">{label}:</span>{" "}
          {detail}
        </span>
        {subItems && subItems.length > 0 && (
          <ul className="mt-2 space-y-1.5 pl-1">
            {subItems.map((sub, i) => (
              <li key={i} className="flex gap-2 text-sm text-app-secondary">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-app-secondary" />
                <span>{sub}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="">
      <div className="mx-auto max-w-3xl mb-5 py-8 lg:py-2">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-app-primary">
            Privacy &amp; Policy
          </h1>
          <p className="mt-1 text-sm text-app-secondary">
            Last updated: January 2025
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.id}>
              <h2 className="mb-3 text-base font-bold text-app-primary">
                {section.id}. {section.title}
              </h2>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <BulletItem
                    key={idx}
                    label={item.label}
                    detail={item.detail}
                    subItems={item.subItems}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
