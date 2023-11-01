import React from "react";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <p>Halaman Home</p>
      <Footer />
    </>
  );
};

export default HomePage;