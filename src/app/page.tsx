import React from "react";
import Hero from "@/components/Hero";
import BannerImage from "@/components/BannerImage";
import Counter from "@/components/Counter";
import Abt from "@/components/Abt";
import ClientLofo from "@/components/ClientLofo";
import Work from "@/components/Work";
import Product from "@/components/Product";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";

const Home = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <Hero />
      <BannerImage />
      <Counter />
      <Abt />
      <ClientLofo />
      <Work />
      <Product />
      <WhyUs />
      <Process />
    </div>
  );
};

export default Home;
