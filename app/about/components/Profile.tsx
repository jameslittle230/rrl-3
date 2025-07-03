export const Profile = (props: {
  imageUrl: string;
  name: string;
  children: React.ReactNode;
}) => (
  <div className="border-gray-300 border-1 border-solid rounded-lg p-3 my-4 overflow-clip">
    <div className="flex-column space-y-2 lg:flex lg:flex-row md:space-x-4">
      <div className="w-52 flex-shrink-0">
        <img className="rounded" src={props.imageUrl} alt={`Picture of ${props.name}`} />
      </div>
      <div className="prose leading-[1.5]">
        <p className="no-prose font-bold text-xl mb-3">{props.name}</p>
        {props.children}
      </div>
    </div>
  </div>
);
