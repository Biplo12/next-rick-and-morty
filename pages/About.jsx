import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Container } from "../components/styles/About.styled";
const About = () => {
  return (
    <>
      <Navbar />
      <Container>
        <h1>Rick and morty API characters wiki</h1>
        <h2>Created using Next.js + Apollo Client + styled.components</h2>
        <h3>
          This project is created as recruitment task for company named
          <b> Autentika</b>
        </h3>
      </Container>
    </>
  );
};

export default About;
