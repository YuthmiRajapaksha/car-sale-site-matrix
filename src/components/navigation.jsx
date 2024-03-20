import { Outlet, Link } from "react-router-dom";

import logo from "../dist/img/logo.png";

export const Navigation = (props) => {
  return (
    <div>
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <a class="navbar-brand" href="#">
            <img
              style={{ marginRight: 10, marginTop: -10 }}
              src={logo}
              width="40"
              height="40"
              alt=""
            />
          </a>
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div>
              <a className="navbar-brand page-scroll" href="#page-top">
                Vehicle Solution
              </a>
            </div>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#services" className="page-scroll">
                  Services
                </a>
              </li>

              <li>
                <a href="#vehicles" className="page-scroll">
                  Vehicles
                </a>
              </li>
              <li>
                <a href="#testimonials" className="page-scroll">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  Our Staff
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};
