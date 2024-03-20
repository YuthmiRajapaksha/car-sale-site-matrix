import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export const Services = (props) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <div id="services" className="text-center text-block">
      <div className="container text-upper">
        <div className="section-title">
          <h2>Our Services</h2>
          <p></p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <Link target="_blank" to={d.link}>
                    <i
                      style={{
                        color: isHovering ? "darkblue" : "",
                      }}
                      className={d.icon}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    ></i>
                  </Link>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    {/* <Link href="" target="_blank" to={d.link}>
                      {d.name}
                    </Link> */}
                  </div>
                </div>
              ))
            : "loading"}
        </div>
        <Outlet />
      </div>
    </div>
  );
};
