import Icon from "./icon";
import Button from "./button";

const Header = () => (
  <div className="flex justify-between">
    <div>
      <h1 className="text-blue-600 font-serif text-5xl font-extrabold mb-2">
        Drs. Roth, Rotter, and Laster
      </h1>
      <div className="text-lg">
        <p className="text-gray-500">
          <Icon icon="mappin.circle.fill" /> 637 Washington Street • Suite 202 •
          Brookline MA 02446
        </p>
        <p className="text-gray-500">
          <Icon icon="phone.fill" /> (617) 232-2811
        </p>
      </div>
    </div>
    <div>
      <Button type="blue" href="https://mychart.chppoc.org/rrl">
        Patient Portal Login →
      </Button>
    </div>
  </div>
);

export default Header;
