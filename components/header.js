import Icon from "./icon";
import Button from "./button";
import Link from "next/link";

const Header = (props) => (
  <div className="flex justify-between space-x-0 md:space-x-8">
    <div className="w-full">
      <div className="flex justify-between items-start">
        <h1 className="text-blue-600 font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2">
          <Link href="/" passHref>Drs. Roth, Rotter, &amp;&nbsp;Laster</Link>
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
        <div className="text-gray-500 flex space-x-2">
          <Icon icon="mappin.circle.fill" />
          <p>637 Washington Street • Suite 202 • Brookline MA 02446</p>
        </div>
        <div className="flex space-x-2 text-gray-500">
          <Icon icon="phone.fill" />
          <p>(617) 232-2811</p>
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
