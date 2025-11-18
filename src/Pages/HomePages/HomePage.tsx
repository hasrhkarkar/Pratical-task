import React from "react";
import "./HomePage.scss";
import Header from "../../Component/Header/Header";
import SwiperSlider from "../../Component/SwiperSlider/SwiperSlider";
import Stats from "../../Component/Stats/Stats";
import AboutUs from "../../Component/AboutUs/AboutUs";
import EnrollForm from "../../Component/EnrollForm/EnrollForm";
import Activities from "../../Component/Activities/Activities";
import Timeline from "../../Component/Timeline/Timeline";
import Team from "../../Component/Team/Team";
import Facilities from "../../Component/Facilities/Facilities";
import Footer from "../../Component/Footer/Footer";

export default function HomePage() {
  return (
    <div className="app-header">
      <Header />
      <SwiperSlider />
      <Stats />
      <AboutUs />
      <EnrollForm />
      <Activities />
      <Timeline />
      <Team />
      <Facilities />
      <Footer />
    </div>
  );
}
