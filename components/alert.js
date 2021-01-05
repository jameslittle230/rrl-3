const Alert = (props) => {
  const containerClassName = `rounded px-5 py-3
  ring ring-red-400 bg-red-300 text-red-800 
  text-sm
  justify-between flex-column space-y-4
  md:flex md:items-center md:flex-row md:items-middle md:space-y-0 md:space-x-4

`
  
  return(
  <div className={containerClassName}>
    <div className="hidden md:block h-10 w-10 flex-shrink-0 text-center bg-red-800 text-red-300 rounded-full">
      <span className="font-extrabold text-4xl">!</span>
    </div>
    <div className="flex-grow">
      <h1 className="text-red-900 font-bold text-lg">{props.title}</h1>
      <p>{props.children}</p>
    </div>
    <div className="flex-shrink-0">{props.endContent}</div>
  </div>
)};

export default Alert;
