import { useState } from "react";
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
const TestRun = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [profession, setProfession] = useState("");
  const [address, setAddress] = useState("");
  const [cus_req, setCus_req] = useState("");
  const [make, setMake] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [ownership, setOwnership] = useState("");
  const [year_manufacture, setYear_manufacture] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/testdrive", {
        name: `${name}`,
        contact: `${contact}`,
        email: `${email}`,
        profession: `${profession}`,
        address: `${address}`,
        cus_req: moment(cus_req).format("YYYY-MM-DD HH:mm"),
        make: `${make}`,
        brand: `${brand}`,
        model: `${model}`,
        year_manufacture: `${year_manufacture}`,
        ownership: `${ownership}`,
      })
      .then(() => {
        Swal.fire(`Test Run Added !  `, "Successfuly!", "success");
      })

      .catch((e) => {
        Swal.fire({
          text: e.response.data.message,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Decline",
        });
      });

    setName("");
    setEmail("");
    setContact("");
    setProfession("");
    setAddress("");
    setCus_req("");
    setMake("");
    setBrand("");
    setModel("");
    setYear_manufacture("");
    setOwnership("");
  };
  return (
    <div>
      <div id="contact">
        <div className="section-tittle" style={{ textAlign: "center" }}>
          <p style={{ fontWeight: "bold", fontSize: "4rem", marginTop: "1px" }}>
            TEST DRIVE
          </p>
        </div>
        <div className="container">
          <div className="row" style={{ marginTop: "30px" }}>
            <div className="col-xs-12 col-md-6">
              <img
                src="img/TestDrive.jpeg"
                className="img-responsive"
                alt=""
                style={{ borderRadius: "30px" }}
              />
            </div>
            <div className="col-xs-12 col-md-6">
              <div style={{ marginLeft: "50px" }}>
                <h2>Description</h2>
                <p>
                  Your test drive is about much more than clambering behind the
                  wheel and making sure you can comfortably reach the controls.
                  If you're shopping for a used car, it's your chance to check
                  that the car is in good working order, and has been well
                  looked-after by the current owner.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="col-md-6">
            <div className="row">
              <h3
                style={{
                  textAlign: "center",
                  marginTop: "98px",
                  fontSize: "35px",
                }}
              >
                Personal
              </h3>
              <form name="sent message " validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="name"> Full Name: </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="eg. Amaljith"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="contact">Contact: </label>
                      <input
                        type="text"
                        id="contact"
                        name="contact"
                        className="form-control"
                        placeholder="eg: 1234567890"
                        required
                        value={contact}
                        maxLength={10}
                        onChange={(e) => setContact(e.target.value)}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      {" "}
                      <label htmlFor="email"> Email: </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="eg: vehiclesolution@gmail.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      {" "}
                      <label htmlFor="profession"> Profession: </label>
                      <input
                        type="text"
                        id="Profession"
                        name="profession"
                        className="form-control"
                        placeholder="eg: Seller"
                        required
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      {" "}
                      <label htmlFor="address"> Address: </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="form-control"
                        placeholder="eg: 173 Kirulapana"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div id="success"></div>
                <button
                  type="submit"
                  className="btn btn-custom btn-lg"
                  style={{ marginLeft: "53rem" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <form>
            <div className="col-md-6">
              <div className="contact-item">
                <h3
                  style={{
                    textAlign: "center",
                    marginTop: "82px",
                    fontSize: "35px",
                  }}
                >
                  Vehicle
                </h3>
              </div>
              <div className="contact-item" style={{ marginTop: "40px" }}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <div className="col-md-12">
                        <div className="form-group">
                          {" "}
                          <label htmlFor="cus_req">
                            {" "}
                            Customer Request Date and Time:{" "}
                          </label>
                          <input
                            type="datetime-local"
                            id="datepicker"
                            name="cus_req"
                            value={cus_req}
                            className="form-control"
                            onChange={(e) => setCus_req(e.target.value)}
                          />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          {" "}
                          <label htmlFor="nake"> Make: </label>
                          <input
                            type="text"
                            id="make"
                            name="make"
                            className="form-control"
                            placeholder="eg: Car"
                            required
                            value={make}
                            onChange={(e) => setMake(e.target.value)}
                          />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          {" "}
                          <label htmlFor="brand"> Brand: </label>
                          <input
                            type="text"
                            id="brand"
                            name="brand"
                            className="form-control"
                            placeholder="eg: Toyota"
                            required
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                          />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          {" "}
                          <label htmlFor="model"> Model: </label>
                          <input
                            type="text"
                            id="model"
                            name="model"
                            className="form-control"
                            placeholder="eg: Prius"
                            required
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                          />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          {" "}
                          <label htmlFor="year_manufacture">
                            {" "}
                            Year Manufacture:{" "}
                          </label>
                          <input
                            type="text"
                            id="year_manufacture"
                            name="year_manufacture"
                            className="form-control"
                            placeholder="eg: 2000"
                            maxlength={4}
                            required
                            value={year_manufacture}
                            onChange={(e) =>
                              setYear_manufacture(e.target.value)
                            }
                          />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TestRun;
