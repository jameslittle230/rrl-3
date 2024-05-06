import React from "react";
import Icon from "./Icon";

const Address = (props: { covering?: boolean }) => {
  const data = {
    default: {
      addressLines: [
        "Drs. Roth, Rotter, Laster and Ivanova",
        "637 Washington Street",
        "Suite 202",
        "Brookline, MA 02446",
      ],
      googleUrl:
        "https://www.google.com/maps/dir/?api=1&destination=637+Washington+St+%23202,+Brookline,+MA+02446",
      appleUrl:
        "https://maps.apple.com/?address=637,Washington+St,Brookline,Massachusetts",
    },

    covering: {
      addressLines: [
        "Drs. Jonathan Benjamin, Roger Spingarn, and Elissa Rottenberg",
        "1400 Centre Street",
        "Newton MA 02459",
      ],
      googleUrl:
        "https://www.google.com/maps/dir/?api=1&destination=1400+Centre+St,+Newton,+MA+02459",
      appleUrl:
        "https://maps.apple.com/?address=1400,Centre+St,Newton,Massachusetts",
    },
  };

  const datumToUse = props.covering ? data.covering : data.default;

  const linkClassNames = `block p-4 hover:bg-gray-100 rounded-r-lg`;

  return (
    <div className="not-prose border-gray-300 border-4 border-solid rounded-xl grid md:grid-cols-2 my-4">
      <address className="border-gray-300 border-b-4 md:border-b-0 md:border-r-4 border-solid p-4 row-span-2 leading-snug font-bold not-italic">
        {datumToUse.addressLines.map((line) => (
          <React.Fragment key={line}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </address>
      <a
        className={
          linkClassNames +
          " border-gray-300 border-b-4 border-solid rounded-br-none"
        }
        href={datumToUse.googleUrl}
      >
        <p className="flex gap-2">
          <Icon icon="logo.google" />
          View on Google Maps →
        </p>
      </a>
      <a
        className={linkClassNames + " rounded-tr-none"}
        href={datumToUse.appleUrl}
      >
        <p className="flex gap-2">
          <Icon icon="logo.apple" />
          View on Apple Maps →
        </p>
      </a>
    </div>
  );
};

export default Address;
