import React from "react";
import KategoriBelajar from "../components/KategoriBelajar";
import KursusPopuler from "../components/KursusPopuler";
import Hero from "../components/Hero";
import NavigationBar from "../components/NavigationBar";

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <KategoriBelajar />
      <KursusPopuler />
    </div>
  );
};

export default Home;
