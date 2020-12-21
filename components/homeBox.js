export default (props) => (
  <div className="rounded ring ring-blue-300 flex-shrink w-1/2">
    <div className="bg-blue-200 p-3 font-bold text-lg rounded-tl rounded-tr">
      {props.title}
    </div>
    <div className="p-3 prose-sm">
      <p className="my-0">
        {props.children}
      </p>
    </div>
  </div>
);
