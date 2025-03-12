"use client";

import Avoid from "../components/Avoid";
import Digonode from "../components/Digonode";
import FooterSection from "../components/FooterSection";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SupportOptions from "../components/SupportOptions";
import SupportPage from "../components/SupportPage";
import Wrapper from "../components/Wrapper";
import JivoChat from "../Jivochat";
import PrinterSetup from "./content/PrinterSetup";

// import Head from "next/head";
// import PrinterGuide from "./content/PrinterGuide";
// import PrinterSetup from "./content/PrinterSetup";
// import Solutions from "./content/Solutions";
// import '@fortawesome/fontawesome-free/css/all.min.css'; 
// import Support from "./content/Support";
// import Chatlink from "./content/Chatlink";
// import Avoid from "../components/Avoid";
// import Digonode from "../components/Digonode";
// import Technicians from "../components/Technicians";
// import Assistance from "../components/Assistance";
// import Helppage from "../components/Helppage";
// import ChatSection from "../components/ChatSection";

// import './globals.css'
function Home() {
  return (
    <>
      {/* <Head>
        <title>My Page</title>
      </Head>
      <Chatlink/>
      <Digonode/>
      
      <Technicians/>
      <Assistance/>
      <Avoid/>
      <Helppage/>
      <Support />
      <Solutions />
      <PrinterGuide /> */}
      <Navbar/>
      <Header/>
      <PrinterSetup/>
      <SupportOptions/>
      <SupportPage/>
      <Digonode/>
      <Avoid/>
      <Wrapper/>
      <FooterSection/>
      <JivoChat/>
     
    </>
  );
}

export default Home;