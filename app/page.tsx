
import React from "react";
import Banner from "@/components/home/Banner";
import OurMission from "@/components/home/OurMission";
import OurProducts from "@/components/home/OurProducts";
import MarketingServices from "@/components/home/MarketingServices";
import WhatWeDoBest from "@/components/home/WhatWeDoBest";
import WhyObaro from "@/components/home/WhyObaro";
import UsersSay from "@/components/home/UsersSay";


export default function Home() {

  return (
    <>
      <Banner />
      <OurMission />
      <OurProducts />
      <MarketingServices />
      <WhatWeDoBest />
      <WhyObaro />
      <UsersSay />
    </>
  );
}
