import Search from "./search";
import Link from "next/link";
import { useRouter } from "next/router";
import Icon from "./icon";

const NavItem = (props) => {
  const router = useRouter();

  // Drives highlight
  const isCurrentPage = props.href === router.pathname;

  // Drives whether "folder" is open
  const isCurrentPageOrChild = router.pathname.startsWith(props.href);

  const baseClassNames =
    "uppercase text-md mb-2 px-3 py-1 rounded hover:bg-gray-100";
  const currentPageClassNames = "bg-blue-100 hover:bg-blue-200 font-bold";

  const classNames = [
    baseClassNames,
    isCurrentPage ? currentPageClassNames : "",
  ].join(" ");

  return (
    <li>
      <p className={classNames}>
        {props.href.startsWith("/") ? (
          <Link href={props.href}>
            <div className="cursor-pointer">{props.title}</div>
          </Link>
        ) : (
          <a href={props.href}>
            <div className="cursor-pointer">
              {props.title} <Icon icon="arrow.up.right.square" />
            </div>
          </a>
        )}
      </p>
      {props.children && isCurrentPageOrChild ? (
        <ul className="ml-4 pl-2 border-l-4 border-gray-200">
          {props.children}
        </ul>
      ) : null}
    </li>
  );
};

const navItems = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About Us" },
  {
    href: "/covid19",
    title: "COVID-19",
    children: [
      {
        href: "/covid19/emotional-health",
        title: "Emotional Wellbeing",
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
    children: [
      { href: "https://files.rothrotterlaster.com/fever.pdf", title: "Fever" },
      {
        href: "https://files.rothrotterlaster.com/vomit-diarrhea.pdf",
        title: "Vomiting & Diarhhea",
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

const listNavItems = (items) => {
  return items.map((item) => (
    <NavItem key={item.href} href={item.href} title={item.title}>
      {item.children ? listNavItems(item.children) : null}
    </NavItem>
  ));
};

const Navigation = () => {
  const navItemElements = listNavItems(navItems);
  return (
    <div className="flex-shrink-0">
      <Search />
      <ul>{navItemElements}</ul>
    </div>
  );
};

export default Navigation;
