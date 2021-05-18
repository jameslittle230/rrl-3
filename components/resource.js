import Icon from "../components/icon";

const Resource = (props) => (
  <a
    href={props.url}
    target="_blank"
    className={`p-4 my-4 rounded-xl
    border-4 border-gray-400 border-solid
    flex space-x-4 items-center hover:bg-gray-100`}
  >
    <div className="flex-shrink text-4xl">
      <Icon icon={props.icon || "doc.text"} />
    </div>
    <div className="">
      <p className="text-lg text-gray-800 font-semibold">{props.name} →</p>
      {props.subtitle ? (
        <p className="text-sm text-gray-600">{props.subtitle}</p>
      ) : null}
      {props.children ? <p className="mt-4">{props.children}</p> : null}
    </div>
  </a>
);

export default Resource;
