import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main>
      <div className="container not-found">
        <h1 className="hero-header">
          Sorry, the page you were looking for was not found.
        </h1>
        <Link to="/" className="btn main-link luxury-type text-white">
          Return to home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
