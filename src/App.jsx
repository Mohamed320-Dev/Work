import React from "react";
import Navbar from "./Navbar";
import SecondPart from "./SecondPart";
import ThirdPart from "./ThirdPart";
import Fourth from "./Fourth";
import Company from "./Company";
import Section from "./Section";
import BookPart from "./BookPart";
import AboutPart from "./AboutPart";
import BelievePart from "./BelievePart";
import FooterPart from "./FooterPart";
import EndPart from "./EndPart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarA from "./The Book/NavbarA";
import SecondPartAbout from "./The Book/SecondPartAbout";
import ThirdPartAbout from "./The Book/ThirdPartAbout";
import FourthPartAbout from "./The Book/FourthPartAbout";
import DescriptionAbout from "./The Book/DescriptionAbout";
import LookInside from "./The Book/LookInside";
import ElementSectionAbout from "./The Book/ElementSectionAbout";
import FromAuthorAbout from "./The Book/FromAuthorAbout";
import PurshageSectionAbout from "./The Book/PurshageSectionAbout";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Define a single route for the home page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <SecondPart />
              <ThirdPart />
              <Fourth />
              <Company />
              <Section />
              {/* <BookPart /> */}
              <AboutPart />
              <BelievePart />
              <FooterPart />
              <EndPart />
            </>
          }
        />
        <Route
          path="/the-book"
          element={
            <>
              <NavbarA />
              <SecondPartAbout />
              <ThirdPartAbout />
              <FourthPartAbout />
              <DescriptionAbout />
              <LookInside />
              <ElementSectionAbout />
              <FromAuthorAbout />
              <PurshageSectionAbout />
              <EndPart />
            </>
          }
        />
      </Routes>
    </Router>
  );
}
