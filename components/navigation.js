import Link from "next/link";
import { useRouter } from "next/router";

const NavItem = (props) => {
  const router = useRouter();
  
  const isCurrentPage = props.href === router.pathname;
  
  const baseClassNames = "uppercase text-md mb-2 px-3 py-1";
  const currentPageClassNames = "bg-blue-100 font-bold rounded";
  
  const classNames = [
    baseClassNames,
    isCurrentPage ? currentPageClassNames : "",
  ].join(" ");

  return (
    <li className={classNames}>
      <Link href={props.href}>{props.title}</Link>
      {props.children && isCurrentPage ? (
        <ul className="ml-4">{props.children}</ul>
      ) : null}
    </li>
  );
};

export default () => (
  <ul>
    <NavItem href="/" title="Home" />
    <NavItem href="/a" title="About Us" />
    <NavItem href="/a" title="COVID-19">
      <NavItem href="/a" title="COVID-19 Mental Health" />
    </NavItem>
    <NavItem href="/a" title="Appointments" />
    <NavItem href="/a" title="How to Reach your Pediatrician" />
    <NavItem href="/a" title="Emergencies &amp; After Hours" />
    <NavItem href="/a" title="New Patient Information" />
    <NavItem href="/a" title="Forms &amp; Resources" />
    <NavItem href="/a" title="Office Policies" />
    <NavItem href="/a" title="Insurance &amp; Payments" />
    <NavItem href="/a" title="Referrals" />
  </ul>
);
