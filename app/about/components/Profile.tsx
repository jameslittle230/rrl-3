export const Profile = (props: {
  imageUrl: string;
  name: string;
  children: React.ReactNode;
}) => (
  <div className="border-gray-300 border-2 border-solid rounded-xl p-4 my-4 overflow-clip">
    <div className="flex-column space-y-2 lg:flex lg:flex-row md:space-x-4">
      <div className="w-52 flex-shrink-0">
        <img
          className="rounded"
          src={props.imageUrl}
          alt={`Picture of ${props.name}`}
        />
      </div>
      <div className="prose">
        <p className="no-prose font-bold text-2xl mb-3">{props.name}</p>
        {props.children}
      </div>
    </div>
  </div>
);
