import React from "react";

const VehicleCard = ({
  brand,
  image,
  model,
  yom,
  mileage,
  price,
  availability,
}) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img
          src={`http://127.0.0.1:8000/storage/${image}`}
          alt="Avatar"
          style={{ width: "100%", height: "240px" }}
        />
        <div>
          <h4 style={{ fontWeight: "bold", fontSize: "3rem" }}>{brand}</h4>
          <div style={{ fontWeight: "bold" }}>
            {" "}
            <p>Model : {model}</p>
            <p>Year Of Manufacture : {yom}</p>
            <p>Mileage : {mileage}</p>
            <p>Price : {price}</p>
          </div>

          <p
            style={{
              fontWeight: "bold",
              color: availability === "true" ? "green" : "red",
            }}
          >
            {availability === "true" ? "For Sale" : "Sold Out"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
