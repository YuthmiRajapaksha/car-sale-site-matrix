export const Header = (props) => {
  return (
    <div>
      <h2>Carousel Example</h2>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
        </ol>

        <div className="carousel-inner">
          <div className="item active">
            <div className="carousel-caption">
              <section class="text-center">
                <div>
                  <h1>GET YOUR DREAM VEHICLE</h1>

                  <p>
                    We are the exclusive dealer / distributor for the Many
                    brands in Sri Lanka and a fully owned subsidiary of Vehicle
                    Solution(Pvt Ltd), Sri lanka.
                  </p>
                </div>
              </section>
            </div>
            <img
              src="../img/c.jpg"
              alt="Carosal 1"
              style={{ height: "700px", width: "100%" }}
            />
          </div>

          <div className="item">
            <div className="carousel-caption">
              <h2>Everything And A Little More</h2>
            </div>
            <img
              src="../img/intro-bg.jpg"
              alt="Carosal 2"
              style={{ height: "700px", width: "100%" }}
            />
          </div>

          <div className="item">
            <div className="carousel-caption">
              <h2 style={{ textAlign: "left", color: "white" }}>
                Explore Your Possibilities
              </h2>
              <h2 style={{ textAlign: "right", color: "white" }}>
                Elevate Your Journey
              </h2>
            </div>
            <img
              //
              src="../img/carosal2.jpg"
              alt="Carosal 3"
              style={{ height: "700px", width: "100%" }}
            />
          </div>
          <div className="item">
            <div className="carousel-caption"></div>
            <img
              //
              src="../img/carosal4.jpg"
              alt="Carosal 4"
              style={{ height: "700px", width: "100%" }}
            />
          </div>
        </div>

        <a
          className="left carousel-control"
          href="#myCarousel"
          data-slide="prev"
        >
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#myCarousel"
          data-slide="next"
        >
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};
