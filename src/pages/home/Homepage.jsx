import { Link } from "react-router-dom";

function Homepage() {
  return (
    <main>
      <div className="container home-container">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="/vans" className="main-link">
          Find your van
        </Link>
      </div>
    </main>
  );
}

export default Homepage;
