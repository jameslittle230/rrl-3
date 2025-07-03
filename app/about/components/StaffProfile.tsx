export const StaffProfile = (props: {
  name: string;
  since: string;
  imageUrl: string;
}) => (
  <div className="no-prose border-gray-200 border-1 border-solid rounded-lg p-3 overflow-clip">
    <div>
      <img
        className="mb-2 -mt-1 -mx-1 rounded-md max-w-[calc(100%+0.5em)]" // 1em = mx-2 * 2
        src={props.imageUrl}
        alt={`Picture of ${props.name}`}
      />
      <p className="font-bold leading-tight">{props.name}</p>
    </div>
  </div>
);
