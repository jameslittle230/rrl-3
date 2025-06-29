import * as React from "react";
import { cva } from "class-variance-authority";
import { Link } from "./Link";
const data = {
  default: {
    addressLines: ["Washington Square Pediatrics", "637 Washington Street", "Suite 202", "Brookline, MA 02446"],
    googleUrl:
      "https://www.google.com/maps/dir/?api=1&destination=637+Washington+St+%23202,+Brookline,+MA+02446",
    appleUrl:
      "https://maps.apple.com/?address=637,Washington+St,Brookline,Massachusetts",
  },

  covering: {
    addressLines: ["Drs. Jonathan Benjamin, Roger Spingarn, and Elissa Rottenberg", "1400 Centre Street", "Newton MA 02459"],
    googleUrl:
      "https://www.google.com/maps/dir/?api=1&destination=1400+Centre+St,+Newton,+MA+02459",
    appleUrl:
      "https://maps.apple.com/?address=1400,Centre+St,Newton,Massachusetts",
  },
};

const addressStyles = cva(["w-full", "border-gray-200", "border-2", "rounded-md", "p-2", "bg-address"]);

export interface AddressProps extends React.HTMLAttributes<HTMLDivElement> {
  dataset?: "default" | "covering";
}

const Address = React.forwardRef<HTMLDivElement, AddressProps>(
  ({ className, dataset = "default", ...props }, ref) => {
    return (
      <div className={addressStyles({ className })} ref={ref} {...props}>
        <address className="not-italic mb-2 leading-5 z-10">
          {data[dataset].addressLines.map((str, idx) => (<React.Fragment key={idx}>{str}<br /></React.Fragment>))}
        </address>
        <div className="flex gap-3 text-sm">
          <Link href={data[dataset].googleUrl}>Google Maps &rarr;</Link>
          <Link href={data[dataset].appleUrl}>Apple Maps &rarr;</Link>
        </div>
      </div>
    );
  },
);

Address.displayName = "Address";
export default Address;
