export interface NavItem {
  href: string;
  title: string;
  children?: NavItem[];
  childrenAlwaysOpen?: boolean;
  mobileOnly?: boolean;
}

export const navItems: NavItem[] = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About Us" },
  {
    href: "https://mychart.chppoc.org/rrl",
    title: "Patient Portal Login",
    mobileOnly: true,
  },

  { href: "/appointments", title: "Appointments" },
  // { href: "/how-to-reach", title: "How to Reach your Pediatrician" },
  { href: "/emergencies-after-hours", title: "Emergencies & After Hours" },
  { href: "/new-patient", title: "New Patient Information" },
  {
    href: "/resources",
    title: "Forms & Resources",
    childrenAlwaysOpen: true,
    children: [
      { href: "https://files.rothrotterlaster.com/fever.pdf", title: "Fever" },
      {
        href: "https://files.rothrotterlaster.com/vomit-diarrhea.pdf",
        title: "Vomiting & Diarrhea",
      },
      {
        href: "https://files.rothrotterlaster.com/drug-dosing.pdf",
        title: "Medication Dosing",
      },
    ],
  },
  { href: "/policies", title: "Office Policies" },
  { href: "/insurance", title: "Insurance" },
  { href: "/payments", title: "Payments" },
  { href: "/referrals", title: "Referrals" },
];
