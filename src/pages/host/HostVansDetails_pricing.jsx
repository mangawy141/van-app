import { useSelector } from "react-redux";

export default function HostVansDetails_pricing() {
  const { rentedVan } = useSelector((store) => store.host);
  const { price } = rentedVan;

  return (
    <h4 className="text-3xl">
      $<span className="font-medium">{price}</span>/day
    </h4>
  );
}
