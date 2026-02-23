import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate, useLocation } from "react-router-dom";

function Viewbikes() {

  const [bikes, setBikes] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Fetch bikes
  const fetchBikes = () => {
    axios.get("http://localhost:5001/getbikes")
      .then((res) => setBikes(res.data))
      .catch((err) => {
        console.log(err);
        alert("Failed to fetch bikes");
      });
  };

  useEffect(() => {
    fetchBikes();
  }, []);

  // ✅ Show alert ONLY when message exists
  useEffect(() => {
    if (location.state?.message) {
      alert(location.state.message);

      // 🔥 Clear message after showing once
      navigate(location.pathname, { replace: true });
    }
  }, [location.state, navigate, location.pathname]);

  const deleteBike = async (id) => {
    if (window.confirm("Delete this bike?")) {
      try {
        const result = await axios.delete(
          `http://localhost:5001/deletebike/${id}`
        );

        alert(result.data.message);
        fetchBikes();

      } catch (err) {
        console.log(err);
        alert("Delete Failed");
      }
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h3 className="text-center text-primary mb-4">
          Bikes List
        </h3>

        <div className="row">
          {bikes.length === 0 ? (
            <p className="text-center">No bikes found</p>
          ) : (
            bikes.map((bike) => (
              <div key={bike.id} className="col-md-4 mb-4">
                <div className="card shadow">
                  <div className="card-body">

                    <h5 className="text-primary">{bike.name}</h5>

                    <p><b>Type:</b> {bike.type}</p>
                    <p><b>Price:</b> ₹{bike.price}</p>
                    <p><b>Mileage:</b> {bike.mileage}</p>
                    <p><b>Mfg Year:</b> {bike.mfgYear}</p>
                    <p><b>Chasis Number:</b> {bike.chasisNumber}</p>

                    <div className="d-flex">

                      <button
                        className="btn btn-warning btn-sm m-1"
                        onClick={() =>
                          navigate(`/bikestore/edit/${bike.id}`)
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-danger btn-sm m-1"
                        onClick={() => deleteBike(bike.id)}
                      >
                        Delete
                      </button>

                    </div>

                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </>
  );
}

export default Viewbikes;