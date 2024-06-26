const ResourceGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="resource-grid grid md:grid-cols-2 gap-4">{children}</div>
);
export default ResourceGrid;
