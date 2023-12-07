export const StaffProfile = (props: {
  name: string;
  since: string;
  imageUrl: string;
}) => (
  <div className="no-prose border-gray-200 border-2 border-solid rounded-xl p-2 overflow-clip">
    <div>
      <img
        className="mb-2 -mt-2 -mx-2 max-w-[calc(100%+1em)]" // 1em = mx-2 * 2
        src={props.imageUrl}
        alt={`Picture of ${props.name}`}
      />
      <p className="font-bold leading-tight">{props.name}</p>
      <p className="text-sm text-gray-700">Since {props.since}</p>
    </div>
  </div>
);
