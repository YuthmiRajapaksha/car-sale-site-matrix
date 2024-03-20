import { useState } from "react";

import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
const initialState = {
  name: "",
  contact: "",
  email: "",
  profession: "",
  address: "",
  cusRequestDate: "",
  make: "",
  brand: "",
  model: "",
  payment: "",
  insurance: "",
  remarks: "",
};
export const Inquiry = (props) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [address, setAddress] = useState("");
  const [cus_req, setCusRequestDate] = useState("");
  const [make, setMake] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [payment, setPayment] = useState("");
  const [insurance, setInsurance] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleReset = (event) => {
    event.preventDefault();
    setName("");
    setContact("");
    setEmail("");
    setProfession("");
    setAddress("");
    setCusRequestDate("");
    setMake("");
    setBrand("");
    setModel("");
    setPayment("");
    setInsurance("");
    setRemarks("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/vehicle_inquiry", {
        name: `${name}`,
        contact: `${contact}`,
        email: `${email}`,
        profession: `${profession}`,
        address: `${address}`,
        cus_req: moment(cus_req).format("YYYY-MM-DD HH:MM"),
        make: `${make}`,
        brand: `${brand}`,
        model: `${model}`,
        payment: `${payment}`,
        insurance: `${insurance}`,
        remarks: `${remarks}`,
      })
      .then(() => {
        Swal.fire(`Inquiry Added !  `, "Successfuly!", "success");
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
    setContact("");
    setEmail("");
    setProfession("");
    setAddress("");
    setCusRequestDate("");
    setMake("");
    setBrand("");
    setModel("");
    setPayment("");
    setInsurance("");
    setRemarks("");
  };

  return (
    <div>
      <div id="contact">
        <div className="section-title">
          <p
            style={{
              fontWeight: "bold",
              fontSize: "4rem",
              marginTop: "5px",
              textAlign: "center",
            }}
          >
            INQUIRY
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img
                src="img/inquiry.jpg"
                className="img-responsive"
                style={{ borderRadius: "30px" }}
                alt=""
              />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="section-title" style={{ marginLeft: "50px" }}>
                <h2>Description</h2>
                <p>
                  You can get the details of our vehicles from our car sale
                  through this service. For more details and access the service
                  please fill our vehicle inquiry form.
                </p>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <form
              style={{ marginTop: "20px" }}
              name="inquiry"
              validate
              onSubmit={handleSubmit}
              align="center"
            >
              <div className="row" align="center">
                <div className="col-md-6">
                  <div className="form-group">
                    {" "}
                    <label htmlFor="name">Full Name: </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      name="name"
                      className="form-control"
                      placeholder="eg: Amaljith"
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    {" "}
                    <label htmlFor="contact"> Contact: </label>
                    <input
                      type="text"
                      id="contact"
                      value={contact}
                      name="contact"
                      className="form-control"
                      placeholder="eg: 1234567890"
                      required
                      maxLength={10}
                      onChange={(e) => setContact(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    {" "}
                    <label htmlFor="email"> Email: </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      name="email"
                      className="form-control"
                      placeholder="eg: vehiclesolution@gmail.com"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    {" "}
                    <label htmlFor="profession"> Profession: </label>
                    <input
                      margin-top="25px"
                      type="text"
                      id="profession"
                      value={profession}
                      name="profession"
                      className="form-control"
                      placeholder="eg: Seller"
                      required
                      onChange={(e) => setProfession(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    {" "}
                    <label htmlFor="address">Address: </label>
                    <input
                      type="text"
                      id="address"
                      value={address}
                      name="address"
                      className="form-control"
                      placeholder="eg: 173 kirulapana"
                      required
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    {" "}
                    <label htmlFor="cusRequestDate">
                      {" "}
                      Customer Request Date and Time:{" "}
                    </label>
                    <input
                      type="datetime-local"
                      id="cusRequestDate"
                      name="cusRequestDate"
                      value={cus_req}
                      //value="2018-06-12T19:30"
                      className="form-control"
                      placeholder="Select Date"
                      onChange={(e) => setCusRequestDate(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="make">Make:</label>
                    <input
                      type="text"
                      id="make"
                      value={make}
                      name="make"
                      className="form-control"
                      placeholder="eg: Car"
                      required
                      onChange={(e) => setMake(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    {" "}
                    <label htmlFor="brand">Brand</label>
                    <input
                      type="text"
                      id="brand"
                      value={brand}
                      name="brand"
                      className="form-control"
                      placeholder="eg: Toyota"
                      required
                      onChange={(e) => setBrand(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    {" "}
                    <label htmlFor="model">Model</label>
                    <input
                      type="text"
                      id="model"
                      value={model}
                      name="model"
                      className="form-control"
                      placeholder="eg: Prius"
                      required
                      onChange={(e) => setModel(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    {" "}
                    <label htmlFor="payment">Payment</label>
                    <input
                      type="text"
                      id="payment"
                      value={payment}
                      name="payment"
                      className="form-control"
                      placeholder="eg: Full payment"
                      required
                      onChange={(e) => setPayment(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    {" "}
                    <label htmlFor="insurance">Insurance</label>
                    <input
                      type="text"
                      id="insurance"
                      value={insurance}
                      name="insurance"
                      className="form-control"
                      placeholder="eg: Full Option"
                      required
                      onChange={(e) => setInsurance(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>

              <div className="form-group">
                {" "}
                <label htmlFor="remark">Remark</label>
                <textarea
                  name="remarks"
                  id="remarks"
                  value={remarks}
                  className="form-control"
                  rows="4"
                  placeholder="Type your message"
                  required
                  onChange={(e) => setRemarks(e.target.value)}
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div id="success"></div>
              <button type="submit" className="btn btn-custom btn-lg">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
