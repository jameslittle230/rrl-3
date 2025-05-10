export interface NavItem {
  href: string;
  title: string;
  children?: NavItem[];
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
  { href: "/emergencies-after-hours", title: "Emergencies & After Hours" },
  { href: "/new-patient", title: "New Patient Information" },
  {
    href: "/resources",
    title: "Forms & Resources",
    children: [
      { href: "/resources/behavioral", title: "Behavioral Health" },
      { href: "/resources/well-child", title: "Well Child" },
      { href: "/resources/illness", title: "Illness" },
      { href: "/resources/medication", title: "Medication Dosing" },
      { href: "/resources/vaccines", title: "Vaccine Information" },
    ],
  },
  { href: "/policies", title: "Office Policies" },
  { href: "/insurance", title: "Insurance" },
  { href: "/billing", title: "Billing" },
  { href: "/referrals", title: "Referrals" },
];
