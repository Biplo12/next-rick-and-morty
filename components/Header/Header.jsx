import React from "react";
import Image from "next/image";
import bg from "../../assets/images/background.jpg";
import { Container } from "./Header.styled";
const Header = () => {
  return (
    <Container>
      {/* <Image src={bg} layout="fill" objectFit="cover" objectPosition="center" /> */}
    </Container>
  );
};

export default Header;
