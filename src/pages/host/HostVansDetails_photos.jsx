import { useSelector } from "react-redux";

export default function HostVansDetails_photos() {
  const imageUrl = useSelector((store) => store.host.rentedVan.imageUrl);

  return (
    <div className="pt-5">
      <img
        src={imageUrl}
        alt=""
        className="block h-[100px] w-[100px] rounded-lg"
      />
    </div>
  );
}
