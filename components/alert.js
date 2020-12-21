export default (props) => (
  <div className="rounded px-5 py-3 ring ring-red-400 bg-red-300 text-red-800 text-sm flex justify-between items-middle space-x-4">
    <div className="h-10 w-10 text-center bg-red-800 text-red-300 rounded-xl">
      <span className="font-extrabold pr-3 text-4xl">!</span>
    </div>
    <div className="flex-grow">
      <h1 className="text-red-900 font-bold text-lg">{props.title}</h1>
      <p>{props.children}</p>
    </div>
  </div>
);
