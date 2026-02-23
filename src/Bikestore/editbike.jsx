import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";

function EditBike() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [bike, setBike] = useState({
    name: "",
    price: "",
    type: "",
    mileage: "",
    mfgYear: "",
    engineType: "",
    category:"",
    chasisNumber: ""
  });

  // Fetch selected bike
  useEffect(() => {
    axios.get("http://localhost:5001/getbikes")
      .then((res) => {
        const selectedBike = res.data.find(b => b.id == id);

        if (selectedBike) {
          setBike(selectedBike);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  // ✅ Update Bike
  const updateBike = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.put(
        `http://localhost:5001/updatebike/${id}`,
        bike
      );

      // ✅ Show localhost alert ONCE
      alert(result.data.message || "Bike updated successfully");

      // ✅ Navigate after alert
      navigate("/bikestore/view");

    } catch (error) {
      console.log(error);
      alert("Update failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="card shadow p-4">

          <h4 className="text-center text-primary mb-4">
            Edit Bike
          </h4>

          <form onSubmit={updateBike}>
            <div className="row g-3">

              <div className="col-md-6">
                <label className="form-label">Bike Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={bike.name}
                  onChange={(e) =>
                    setBike({ ...bike, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Price</label>
                <input
                  type="number"
                  className="form-control"
                  value={bike.price}
                  onChange={(e) =>
                    setBike({ ...bike, price: e.target.value })
                  }
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Type</label>
                <input
                  type="text"
                  className="form-control"
                  value={bike.type}
                  onChange={(e) =>
                    setBike({ ...bike, type: e.target.value })
                  }
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Mileage</label>
                <input
                  type="text"
                  className="form-control"
                  value={bike.mileage}
                  onChange={(e) =>
                    setBike({ ...bike, mileage: e.target.value })
                  }
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Manufacturing Year</label>
                <input
                  type="number"
                  className="form-control"
                  value={bike.mfgYear}
                  onChange={(e) =>
                    setBike({ ...bike, mfgYear: e.target.value })
                  }
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Engine Type</label>
                <input
                  type="text"
                  className="form-control"
                  value={bike.engineType}
                  onChange={(e) =>
                    setBike({ ...bike, engineType: e.target.value })
                  }
                  required
                />
              </div>
<div className="col-md-6">
                <label className="form-label">Category</label>
                <input
                  type="text"
                  className="form-control"
                  value={bike.category}
                  onChange={(e) =>
                    setBike({ ...bike, category: e.target.value })
                  }
                  required
                />
              </div>


              <div className="col-md-6">
                <label className="form-label">Chasis Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={bike.chasisNumber}
                  onChange={(e) =>
                    setBike({ ...bike, chasisNumber: e.target.value })
                  }
                  required
                />
              </div>

              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-success w-100 mt-3"
                >
                  Update Bike
                </button>
              </div>

            </div>
          </form>

        </div>
      </div>
    </>
  );
}

export default EditBike;