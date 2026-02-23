import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {

  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <div className="text-center py-5">

          <h1 className="fw-bold display-5 mb-3">
            Welcome to <span className="text-danger">BikeStore</span>
          </h1>

          <p className="text-muted fs-5 mb-4">
            Discover the latest bikes, compare prices and find your dream ride.
          </p>

          <div className="d-flex justify-content-center gap-3 mt-4">

            <button
              className="btn btn-primary px-4"
              onClick={() => navigate("/bikestore/view")}
            >
              View Bikes
            </button>

            <button
              className="btn btn-outline-danger px-4"
              onClick={() => navigate("/bikestore/add")}
            >
              Add Bike
            </button>

          </div>

        </div>

      </div>
    </>
  );
}

export default Home;