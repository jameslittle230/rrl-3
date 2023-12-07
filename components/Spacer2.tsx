import classnames from "classnames";

const Spacer = (props: { size?: "large" | "medium"; border?: boolean }) => {
  const sizeClasses = props.size == "large" ? "mt-6 mb-8" : "mt-2 mb-4";

  return (
    <div
      className={classnames("w-full", sizeClasses, {
        ["h-0.5 bg-black bg-opacity-20"]: props.border,
      })}
    >
      &nbsp;
    </div>
  );
};

export default Spacer;
