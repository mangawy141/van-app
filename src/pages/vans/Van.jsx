import { Link } from "react-router-dom";

function Van({ vanObj }) {
  const { name, imageUrl, price, type, id } = vanObj;

  return (
    <Link to={`/vans/vanDetails/${id}`}>
      <div className="van-item">
        <img src={imageUrl} alt={`${name}-image`} />
        <h2 className="hero-sub-header flex-align-center">
          <span>{name}</span>
          <span className="van-price">${price}</span>
        </h2>
        <button
          className={`btn btn-type ${type}-type
          }`}
        >
          {type}
        </button>
      </div>
    </Link>
  );
}

export default Van;
