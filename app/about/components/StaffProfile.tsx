export const StaffProfile = (props: {
  name: string;
  since: string;
  imageUrl: string;
}) => (
  <div className="not-prose border-gray-200 border-1 border-solid rounded-lg p-3 overflow-clip">
    <div>
      <img
        className="mb-2 -mt-1 -mx-1 rounded-md max-w-[calc(100%+0.5em)] aspect-square object-cover" // 1em = mx-2 * 2
        src={props.imageUrl}
        alt={`Picture of ${props.name}`}
        width={400}
        height={400}
        loading="lazy"
      />
      <p className="font-bold leading-tight">{props.name}</p>
    </div>
  </div>
);
