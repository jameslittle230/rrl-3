export default (props) => {
  const classNames = [
    "w-full",
    (props.border ? "h-0.5 bg-black bg-opacity-20" : ""),
    (props.size == "large" ? "mt-6 mb-8" : "mt-2 mb-4")
  ].join(" ")
  props.border
  return (
    <div className={classNames}>&nbsp;</div>
  );
};
