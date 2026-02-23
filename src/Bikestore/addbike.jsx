import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function AddBike() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [mileage, setMileage] = useState("");
  const [mfgYear, setMfgYear] = useState("");
  const [engineType, setEngineType] = useState("");
  const [category, setCategory] = useState("");
  const [chasisNumber, setChasisNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addBikeData = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await axios.post(
        "http://localhost:5001/addbike",
        {
          name,
          price,
          type,
          mileage,
          mfgYear,
          engineType,
          category,
          chasisNumber,
        }
      );

      setLoading(false);

      // ✅ Show backend localhost message
      alert(result.data.message || "Bike added successfully");

      // ✅ Navigate after alert
      navigate("/bikestore/view");

    } catch (error) {
      console.error(error);
      setLoading(false);

      // ✅ Proper error message
      alert(
        error.response?.data?.message || "Failed to add bike"
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="card p-4 shadow">
          <h4 className="text-center text-primary mb-4">
            Add Bike
          </h4>

          <form onSubmit={addBikeData}>
            <div className="row g-3">

              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Bike Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mileage"
                  value={mileage}
                  onChange={(e) => setMileage(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Manufacturing Year"
                  value={mfgYear}
                  onChange={(e) => setMfgYear(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Engine Type"
                  value={engineType}
                  onChange={(e) => setEngineType(e.target.value)}
                  required
                />
              </div>
<div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Chasis Number"
                  value={chasisNumber}
                  onChange={(e) => setChasisNumber(e.target.value)}
                  required
                />
              </div>

              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Submit"}
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddBike;