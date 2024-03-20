import { useState, useEffect } from "react";
import JsonData from "./data/data.json";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Vehicles } from "./components/vehicle";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import FinanceCalculator from "./components/FinanceCalculator/FinanceCalculator";
const Layout = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      {/* <About data={landingPageData.About} /> */}
      <Services data={landingPageData.Services} />
      <Vehicles data={landingPageData.Vehicles} />
      <FinanceCalculator />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <About data={landingPageData.About} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default Layout;
