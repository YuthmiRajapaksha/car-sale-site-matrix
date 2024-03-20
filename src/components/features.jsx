import React, { useEffect } from "react";
import axios from "axios";
import moment from "moment";

export const Features = (props) => {
  useEffect(() => {
    axios.post("http://127.0.0.1:8000/api/currentvisits", {
      current_visits: 1,
      month: moment(Date.now()).format("M"),
    });
  }, []);

  return (
    <div id="features" className="text-center text-block">
      <div className="container">
        {" "}
        <div className="row">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Why Chose Vehicle Solution:</h2>
            <div className="col-xs-12 col-md-6" style={{ marginTop: "15px" }}>
              {" "}
              <img src="img/cars.jpg" className="img-responsive" alt="" />{" "}
            </div>{" "}
            <div className="col-xs-12 col-md-6" style={{ marginTop: "15px" }}>
              <h6>
                {/* {" "} */}
                When investing in a vehicle for yourself or your family, your
                lifestyle aspirations play an important role in deciding which
                vehicle to buy. At Vehicle Solution, we have identified a range
                of personal vehicles that promise to meet the demanding
                lifestyles of Sri Lankans today.
                <h6>
                  We focus on not only thenreliability of vehicles, but also the
                  manufacturer’s reputation to bring you high performing, fuel
                  efficient and affordable personal vehicles, enabling you to
                  make a well-informed, smart purchasing decision that meets
                  your needs as well as your budget.
                </h6>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
