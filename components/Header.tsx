import Icon from "@/components/Icon";
import Button from "@/components/Button2";
import Link from "next/link";
import classNames from "classnames";

const HeaderLine = ({
  icon,
  text,
  className,
}: {
  icon: string;
  text: string;
  className?: string;
}) => (
  <div
    className={classNames("text-gray-500 flex gap-2 items-baseline", className)}
  >
    <Icon icon={icon} />
    <p>{text}</p>
  </div>
);

const Header = () => (
  <header className="flex justify-between space-x-0 md:space-x-8">
    <div className="w-10/12">
      <div className="flex justify-between items-start">
        <h1 className="text-blue-600 hover:text-blue-800 font-serif text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2">
          <Link href="/">Drs. Roth, Rotter, Laster &amp;&nbsp;Ivanova</Link>
        </h1>
      </div>

      <div className="lg:text-lg">
        <Link href="https://maps.app.goo.gl/UBDnf2qYcMg2e23m8">
          <HeaderLine
            icon="mappin.circle.fill"
            text="637 Washington Street • Suite 202 • Brookline MA 02446"
            className={"underline md:no-underline"}
          />
        </Link>
        <div className="flex space-x-6">
          <HeaderLine
            icon="phone.fill"
            text="(617) 232-2811"
            className={"underline md:no-underline md:hover:underline"}
          />
          <HeaderLine
            icon="faxmachine"
            text="(617) 383-8178"
            className={"underline md:no-underline"}
          />
        </div>
      </div>
    </div>
    <div className="hidden md:block md:flex-shrink-0">
      <Button type="blue" href="https://mychart.chppoc.org/rrl">
        Patient Portal Login →
      </Button>
    </div>
  </header>
);

export default Header;
