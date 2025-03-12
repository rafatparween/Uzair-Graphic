"use client"

import Slider from "./components/Slider";
import Content from "./components/Content"

import Footer from "./components/Footer";
import Customer from "./components/Customer";
import Technicians from "./components/Technicians";
import Assistance from "./components/Assistance";
import Avoid from "./components/Avoid";
import Helppage from "./components/Helppage";
import Digonode from "./components/Digonode";
import JivoChat from "./Jivochat";
import PrintNavbar from "./components/PrintNavbar";
import HeaderSection from "./components/HeaderSection";



function Home() {
  return (
    <>

      <PrintNavbar/>

      <Slider />
      <HeaderSection/>
      <Content />
      {/* <Technicians/>
      <Assistance/>
      <Digonode/>
      <Avoid/>
      <Helppage/> */}
      <Customer/>
      <Footer />
      <JivoChat/>


    </>

  )
}
export default Home;