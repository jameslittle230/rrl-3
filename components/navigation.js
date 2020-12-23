import Link from "next/link";
import { useRouter } from "next/router";

const NavItem = (props) => {
  const router = useRouter();

  // Drives highlight
  const isCurrentPage = props.href === router.pathname;

  // Drives whether "folder" is open
  const isCurrentPageOrChild = router.pathname.startsWith(props.href);

  const baseClassNames = "uppercase text-md mb-2 px-3 py-1";
  const currentPageClassNames = "bg-blue-100 font-bold rounded";

  const classNames = [
    baseClassNames,
    isCurrentPage ? currentPageClassNames : "",
  ].join(" ");

  return (
    <li>
      <p className={classNames}><Link href={props.href}>
        {props.title}
      </Link></p>
      {props.children && isCurrentPageOrChild ? (
        <ul className="ml-4 pl-2 border-l-4 border-gray-200">{props.children}</ul>
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
      }
    ],
  },
  { href: "/appointments", title: "Appointments" },
  { href: "/how-to-reach", title: "How to Reach your Pediatrician" },
  { href: "/emergencies-after-hours", title: "Emergencies & After Hours" },
  { href: "/new-patient", title: "New Patient Information" },
  { href: "/resources", title: "Forms & Resources" },
  { href: "/policies", title: "Office Policies" },
  { href: "/insurance", title: "Insurance & Payments" },
  { href: "/referrals", title: "Referrals" },
];

const Navigation = () => {
  const navItemElements = navItems.map((item) => (
    <NavItem href={item.href} title={item.title}>
      {item.children
        ? item.children.map((subItem) => (
            <NavItem href={subItem.href} title={subItem.title} />
          ))
        : null}
    </NavItem>
  ));
  return <ul className="flex-shrink-0">{navItemElements}</ul>;
};

export default Navigation;
