import { useSelector } from "react-redux";

export default function HostVansDetails_info() {
  const { rentedVan } = useSelector((store) => store.host);
  const { name, type, description } = rentedVan;
  return (
    <div className="mb-5 space-y-4 text-btn-luxury-bg-color">
      <p>
        <span className="font-bold">Name:</span> {name}
      </p>
      <p>
        <span className="font-bold">Category:</span> {type}
      </p>
      <p>
        <span className="font-bold">Description:</span> {description}
      </p>
      <p>
        <span className="font-bold">Visibility:</span> Public
      </p>
    </div>
  );
}
