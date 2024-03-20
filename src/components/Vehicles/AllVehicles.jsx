import VehicleCard from "../VehicleCard/index";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";

const AllVehicles = (props) => {
  const { data, isLoading } = useFetch("http://127.0.0.1:8000/api/vehicles");
  const [makeFilter, setMakeFilter] = useState("");

  const cars = data?.Vehicle.filter((car) => {
    return car.make === "Car";
  });

  const jeep = data?.Vehicle.filter((jeep) => {
    return jeep.make === "Jeep";
  });

  const vans = data?.Vehicle.filter((van) => {
    return van.make === "Van";
  });
  const Diesel = data?.Vehicle.filter((diesel) => {
    return diesel.fuel_type === "Diesel";
  });
  const Petrol = data?.Vehicle.filter((petrol) => {
    return petrol.fuel_type === "Petrol";
  });
  const first = data?.Vehicle.filter((first) => {
    return first.ownership === "First Owner";
  });
  const second = data?.Vehicle.filter((second) => {
    return second.ownership === "Second Owner";
  });
  const third = data?.Vehicle.filter((third) => {
    return third.ownership === "Third Owner";
  });
  return (
    <div id="vehicles" className="text-center text-block">
      <div className="container">
        <div className="section-title" style={{ marginBottom: "20px" }}>
          <h2 style={{ marginBottom: "20px" }}>Vehicles</h2>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
            >
              Make <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" role="menu">
              <li>
                <a
                  onClick={() => {
                    setMakeFilter("");
                  }}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setMakeFilter("Car");
                  }}
                >
                  Car
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setMakeFilter("Van");
                  }}
                >
                  Van
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setMakeFilter("Jeep");
                  }}
                >
                  Jeep
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-group " style={{ margin: "3px" }}>
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
            >
              Fuel Type <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" role="menu">
              <li>
                <a
                  onClick={() => {
                    setMakeFilter("");
                  }}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setMakeFilter("Diesel");
                  }}
                >
                  diesel
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setMakeFilter("Petrol");
                  }}
                >
                  petrol
                </a>
              </li>
            </ul>
          </div>
          <div className="btn-group " style={{ margin: "3px" }}>
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
            >
              OwnerShip <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" role="menu">
              <li>
                <a
                  onClick={() => {
                    setMakeFilter("");
                  }}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setMakeFilter("First Owner");
                  }}
                >
                  First Owner
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setMakeFilter("Second Owner");
                  }}
                >
                  Second Owner
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setMakeFilter("Third Owner");
                  }}
                >
                  Third Owner
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container">
          {makeFilter === ""
            ? data?.Vehicle.map((item) => (
                <VehicleCard
                  brand={item.brand}
                  image={item.v_image}
                  model={item.model}
                  yom={item.year_manufacture}
                  mileage={item.mileage}
                  price={item.unit_price}
                  availability={item.availability}
                />
              ))
            : makeFilter === "Car"
            ? cars.map((item) => (
                <VehicleCard
                  brand={item.brand}
                  image={item.v_image}
                  model={item.model}
                  yom={item.year_manufacture}
                  mileage={item.mileage}
                  price={item.unit_price}
                  availability={item.availability}
                />
              ))
            : makeFilter === "Jeep"
            ? jeep.map((item) => (
                <VehicleCard
                  brand={item.brand}
                  image={item.v_image}
                  model={item.model}
                  yom={item.year_manufacture}
                  mileage={item.mileage}
                  price={item.unit_price}
                  availability={item.availability}
                />
              ))
            : makeFilter === "Van"
            ? vans.map((item) => (
                <VehicleCard
                  brand={item.brand}
                  image={item.v_image}
                  model={item.model}
                  yom={item.year_manufacture}
                  mileage={item.mileage}
                  price={item.unit_price}
                  availability={item.availability}
                />
              ))
            : ""}
          {makeFilter === "Diesel"
            ? Diesel.map((item) => (
                <VehicleCard
                  brand={item.brand}
                  image={item.v_image}
                  model={item.model}
                  yom={item.year_manufacture}
                  mileage={item.mileage}
                  price={item.unit_price}
                  availability={item.availability}
                />
              ))
            : makeFilter === "Petrol"
            ? Petrol.map((item) => (
                <VehicleCard
                  brand={item.brand}
                  image={item.v_image}
                  model={item.model}
                  yom={item.year_manufacture}
                  mileage={item.mileage}
                  price={item.unit_price}
                  availability={item.availability}
                />
              ))
            : ""}
          {makeFilter === "First Owner"
            ? first.map((item) => (
                <VehicleCard
                  brand={item.brand}
                  image={item.v_image}
                  model={item.model}
                  yom={item.year_manufacture}
                  mileage={item.mileage}
                  price={item.unit_price}
                  availability={item.availability}
                />
              ))
            : makeFilter === "Second Owner"
            ? second.map((item) => (
                <VehicleCard
                  brand={item.brand}
                  image={item.v_image}
                  model={item.model}
                  yom={item.year_manufacture}
                  mileage={item.mileage}
                  price={item.unit_price}
                  availability={item.availability}
                />
              ))
            : makeFilter === "Third Owner"
            ? third.map((item) => (
                <VehicleCard
                  brand={item.brand}
                  image={item.v_image}
                  model={item.model}
                  yom={item.year_manufacture}
                  mileage={item.mileage}
                  price={item.unit_price}
                  availability={item.availability}
                />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};
export default AllVehicles;
