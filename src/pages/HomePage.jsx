import React from "react";
import Hero from "../components/Hero";
import Proof from "../components/Proof";
import Brand from "../components/Brand";
import Products from "../components/Products";
import Services from "../components/Services";
import Process from "../components/Process";
import CTA from "../components/CTA";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <div className="p-16 space-y-32">
        <Brand />
        <Products />
        <Services />
        <Proof />
        <Process />
        <CTA />
      </div>
    </div>
  );
};

export default HomePage;
