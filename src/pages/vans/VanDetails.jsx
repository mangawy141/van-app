import { useEffect } from "react";
import Spinner from "../../ui/Spinner";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchVanDetail, setVanFilter } from "./vanSlice-2";
import { postRentedVan } from "../host/hostSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackLink from "../../ui/BackLink";

function VanDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedVan, isLoading } = useSelector((store) => store.vans);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVanDetail(id));
  }, [dispatch, id]);

  const { name, imageUrl, price, type, description } = selectedVan || {};

  const handleRentVan = () => {
    dispatch(postRentedVan());
    toast.success(
      `${name} successfully added to hosted vans!,
      Click here to go there !!
       `,
    );
    // navigate("/host/vans");
  };

  return (
    <main>
      <div className="container">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="van-detail">
            <BackLink to="/vans" />
            <img src={imageUrl} alt={name} />
            {/* Navigate to Vans page with the filter */}
            <button
              className={`btn ${type}-type text-white`}
              onClick={() => {
                navigate(`/vans?filtered=${type}`);
                dispatch(setVanFilter(type));
              }}
            >
              {type}
            </button>
            <h1 className="hero-header">{name}</h1>
            <h2 className="hero-sub-header">
              ${price}
              <span className="day-span">/day</span>
            </h2>
            <p>{description}</p>
            <button className="main-link" onClick={handleRentVan}>
              Rent this van
            </button>
          </div>
        )}
      </div>
      <Link to="/host/vans">
        <ToastContainer
          position="top-center"
          autoClose={3000}
          progressClassName={`${type}-type`}
        />
      </Link>
    </main>
  );
}

export default VanDetails;
