import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, List, Item } from "./Navbar.styled";
const Navbar = () => {
  const router = useRouter();
  return (
    <Container>
      <List>
        <Link href="/about">
          <Item>
            <a className={router.pathname == "/about" ? "active" : ""}>About</a>
          </Item>
        </Link>
        <Link href="/">
          <Item>
            <a className={router.pathname == "/" ? "active" : ""}>Characters</a>
          </Item>
        </Link>
        <Link href="/github">
          <Item>
            <a className={router.pathname == "/github" ? "active" : ""}>
              Github
            </a>
          </Item>
        </Link>
      </List>
    </Container>
  );
};

export default Navbar;
