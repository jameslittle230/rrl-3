import Icon from "./icon";
import Button from "./button";
import Link from "next/link";

const HeaderLine = ({ icon, text }) => (
  <div className="text-gray-500 flex space-x-2">
    <Icon icon={icon} />
    <p>{text}</p>
  </div>
);

const Header = (props) => (
  <div className="flex justify-between space-x-0 md:space-x-8">
    <div className="w-full">
      <div className="flex justify-between items-start">
        <h1 className="text-blue-600 hover:text-blue-800 font-serif text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2">
          <Link href="/" passHref>
            Drs. Roth, Rotter, Laster &amp;&nbsp;Ivanova
          </Link>
        </h1>
        <button
          className="md:hidden text-5xl text-gray-700"
          onClick={() => {
            props.setMobileNavVisible(true);
          }}
        >
          <Icon icon="ellipsis.rectangle" />
        </button>
      </div>

      <div className="lg:text-lg">
        <HeaderLine
          icon="mappin.circle.fill"
          text="637 Washington Street • Suite 202 • Brookline MA 02446"
        />
        <div className="flex space-x-6">
          <HeaderLine icon="phone.fill" text="(617) 232-2811" />
          <HeaderLine icon="faxmachine" text="(617) 383-8178" />
        </div>
      </div>
    </div>
    <div className="hidden md:block md:flex-shrink-0">
      <Button type="blue" href="https://mychart.chppoc.org/rrl">
        Patient Portal Login →
      </Button>
    </div>
  </div>
);

export default Header;
