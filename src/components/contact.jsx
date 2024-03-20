import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import logo from "../dist/img/fullllogo.png";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const results = axios.post("http://127.0.0.1:8000/api/messages", {
        name: `${name}`,
        email: `${email}`,
        message: `${message}`,
      });

      if (results) {
        setEmail("");
        setMessage("");
        setName("");

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Review Sent.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <div className="section-title">
                <h2 style={{ marginLeft: 450, marginTop: 5 }}>Get In Touch</h2>
                <p style={{ marginLeft: 290, marginTop: 50 }}>
                  Please fill out the form below to send us an Review and Thank
                  you for your Response.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        value={name}
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        value={email}
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    value={message}
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    style={{ height: 100 }}
                    required
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button
                  type="submit"
                  className="btn btn-custom btn-lg"
                  style={{ marginLeft: 450 }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div id="footer" style={{ backgroundColor: "#dcdcdc" }}>
        <div className="container text-center">
          <div className="container ">
            <div className="col-md-12">
              <footer className="footer">
                <div className="row">
                  <div className="footer-col">
                    <div className="col-md-3">
                      <img
                        src={logo}
                        width="200px"
                        style={{ marginRight: 300 }}
                      />
                    </div>
                    <div className="footer-col">
                      <div className="col-md-3">
                        <h4 style={{ marginRight: 150 }}> Useful Links</h4>
                        <h5 style={{ marginRight: 150, color: "darkblue" }}>
                          ___________________
                        </h5>
                        <ul>
                          <p>
                            <a
                              href=""
                              className="service"
                              style={{
                                color: "#0000cd",
                                marginRight: 150,
                              }}
                            >
                              Services
                            </a>
                          </p>
                          <p>
                            <a
                              href="#vehicles"
                              className="#"
                              style={{ color: "#0000cd", marginRight: 150 }}
                            >
                              Vehicles
                            </a>
                          </p>
                          <p>
                            <a
                              href="#testimonials"
                              style={{ color: "#0000cd", marginRight: 150 }}
                            >
                              Testmonials
                            </a>
                          </p>
                          <p>
                            <a
                              href="#team"
                              style={{ color: "#0000cd", marginRight: 150 }}
                            >
                              Our Staff
                            </a>
                          </p>
                          <p>
                            <a
                              href="#about"
                              style={{ color: "#0000cd", marginRight: 150 }}
                            >
                              About
                            </a>
                          </p>
                          <p>
                            <a
                              href="#about"
                              style={{ color: "#0000cd", marginRight: 150 }}
                            >
                              Contact
                            </a>
                          </p>
                        </ul>
                      </div>
                    </div>
                    <div className="footer-col">
                      <div className="col-md-3">
                        <h4 style={{ marginRight: 130 }}>Working hours</h4>
                        <h5 style={{ marginRight: 130, color: "darkblue" }}>
                          ____________________
                        </h5>
                        <ul>
                          <li
                            style={{
                              marginleft: "5rem",
                              color: "#0000cd",
                              marginRight: 120,
                            }}
                          >
                            Monday to Saturday
                          </li>
                          <li style={{ color: "		#696969", marginRight: 130 }}>
                            9am to 6pm{" "}
                          </li>
                          <br></br>
                          <li style={{ color: "#0000cd", marginRight: 120 }}>
                            Sunday and Holidays
                          </li>
                          <li style={{ color: "		#696969", marginRight: 130 }}>
                            9am to 3pm
                          </li>
                          <br></br>

                          <h4 style={{ marginRight: 130 }}>Contact Info</h4>
                          <h5 style={{ marginRight: 130, color: "darkblue" }}>
                            ____________________
                          </h5>
                          <p
                            style={{
                              color: "#0000cd",
                              marginRight: 35,
                            }}
                          >
                            Hotline - 077123456/0775226321
                          </p>

                          <p
                            style={{
                              color: "#0000cd",
                              marginRight: 100,
                            }}
                          >
                            Landline - 0112736965
                          </p>
                          <p
                            style={{
                              color: "#0000cd",
                              marginRight: 82,
                            }}
                          >
                            Email - vehiclesolution345@gmail.com
                          </p>
                        </ul>
                      </div>

                      <div className="footer-col">
                        <div className="col-md-3">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63389.402015162326!2d79.90128984703962!3d6.789604093624152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24f91d281cc5d%3A0xea4b2fcd3ce0e74e!2sPiliyandala!5e0!3m2!1sen!2slk!4v1657287665149!5m2!1sen!2slk"
                            width="140%"
                            height="340"
                            style={{ border: 0, marginTop: 3, marginLeft: 20 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                          ></iframe>
                          <ul></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
