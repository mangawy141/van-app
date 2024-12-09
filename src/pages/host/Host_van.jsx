import { Link } from "react-router-dom";
import Spinner from "../../ui/Spinner";

export default function Host_van({ hostedVan, isLoading }) {
  const { id, imageUrl, name, price, type } = hostedVan;

  if (isLoading) return <Spinner />;
  return (
    <Link to={`/host/vans/${id}`}>
      <div className="van-box">
        <img src={imageUrl} alt={name} />
        <div className="van-box-info">
          <h3 className={`${type}-text`}>{name}</h3>
          <p>
            <span>${price}</span>/day
          </p>
        </div>
      </div>
    </Link>
  );
}
