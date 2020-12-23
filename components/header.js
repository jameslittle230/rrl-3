import Icon from "./icon"

const Header = () => <div className="flex justify-between">
  <div>
    <h1 className="text-blue-600 font-serif text-5xl font-extrabold mb-2">
      Drs. Roth, Rotter, and Laster
    </h1>
    <div className="text-lg">
      <p className="text-gray-500">
        <Icon icon="mappin.circle.fill" /> 637 Washington Street • Suite 202 • Brookline MA 02446
      </p>
      <p className="text-gray-500"><Icon icon="phone.fill" /> (617) 232-2811</p>
    </div>
  </div>
  <div>
    <a
      href="https://mychart.chppoc.org/rrl"
      className={`rounded-lg px-5 py-3 
      border-solid border-2 border-blue-400
      inline-block 
      bg-gradient-to-b from-blue-100 to-blue-200
      hover:from-blue-50
      font-bold text-blue-900`}
    >
      Patient Portal Login →
    </a>
  </div>
</div>;

export default Header;
