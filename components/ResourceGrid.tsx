import { cva } from "class-variance-authority";
import React from "react";

const resourceGridStyles = cva([
  "resource-grid",
  "grid",
  "md:grid-cols-2",
  "gap-x-4",
]);

interface ResourceGridProps extends React.HTMLAttributes<HTMLDivElement> { }

const ResourceGrid = React.forwardRef<HTMLDivElement, ResourceGridProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={resourceGridStyles({ className })}
        ref={ref}
        {...props}
      />
    );
  },
);

ResourceGrid.displayName = "ResourceGrid";
export default ResourceGrid;
