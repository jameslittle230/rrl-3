const navItems = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About Us" },
  {
    href: "https://mychart.chppoc.org/rrl",
    title: "Patient Portal Login",
    mobileOnly: true,
  },
  {
    href: "/covid19",
    title: "COVID-19",
    children: [
      {
        href: "/covid19/emotional-health",
        title: "Emotional Wellbeing",
      },
      {
        href: "/covid19/vaccination",
        title: "Vaccination Information",
      },
    ],
  },
  { href: "/appointments", title: "Appointments" },
  { href: "/how-to-reach", title: "How to Reach your Pediatrician" },
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
  { href: "/insurance", title: "Insurance & Payments" },
  { href: "/referrals", title: "Referrals" },
];

export default navItems;
