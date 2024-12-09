import { useSelector } from "react-redux";
import Host_van from "./Host_van";
import { useNavigate } from "react-router-dom";

function HostVans() {
  const { listedHosts, isLoading } = useSelector((store) => store.host);
  const navigate = useNavigate();
  return (
    <>
      <div className="vans-container container">
        <h1 className="hero-header">Your listed vans</h1>
        <div className="listed-vans">
          {listedHosts.length !== 0 ? (
            listedHosts.map((hostedVan, i) => (
              <Host_van hostedVan={hostedVan} isLoading={isLoading} key={i} />
            ))
          ) : (
            <div className="van-box">
              <p>No Listed vans found </p>
              <button
                className="btn details-link"
                onClick={() => {
                  navigate("/vans");
                }}
              >
                Rent a van
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default HostVans;
