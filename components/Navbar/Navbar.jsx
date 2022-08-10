import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Container, LogoContainer, List, Item } from "./Navbar.styled";
import logo from "../../assets/images/logo.png";
const Navbar = () => {
  const router = useRouter();
  return (
    <Container>
      <LogoContainer>
        <Link href="/">
          <a>
            <Image
              src="/static/logo.png"
              width="300px"
              height="150px"
              alt="website logo"
            />
          </a>
        </Link>
      </LogoContainer>
      <List>
        <Link href="/About">
          <Item>
            <a className={router.pathname == "/About" ? "active" : ""}>About</a>
          </Item>
        </Link>
        <Link href="/">
          <Item>
            <a className={router.pathname == "/" ? "active" : ""}>Characters</a>
          </Item>
        </Link>
        <Link href="https://github.com/Biplo12/next-rick-and-morty">
          <a target={"_blank"} rel="noreferrer">
            <Image
              src="/static/github-icon.png"
              alt="github icon"
              width="24px"
              height="24px"
            />
          </a>
        </Link>
      </List>
    </Container>
  );
};

export default Navbar;
