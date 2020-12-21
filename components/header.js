export default () => (
  <div className="flex justify-between">
    <div>
      <h1 className="text-blue-600 font-serif text-4xl font-extrabold mb-2">
        Drs. Roth, Rotter, and Laster
      </h1>
      <div className="text-lg">
        <p className="text-gray-500">
          637 Washington Street • Suite 202 • Brookline MA 02446
        </p>
        <p className="text-gray-500">(617) 232-2811</p>
      </div>
    </div>
    <div>
      <a
        href="https://mychart.chppoc.org/rrl"
        className="rounded-lg px-5 py-3 ring-inset ring inline-block bg-blue-100 font-bold text-blue-900"
      >
        Patient Portal Login →
      </a>
    </div>
  </div>
);
