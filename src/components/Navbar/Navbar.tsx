import React from "react";
import { Link } from "react-router-dom";
import { Header, HeaderBox, H2 } from "./NavbarStyle";

const Navbar = () => {
  return (
    <Header>
      <HeaderBox>
        <Link to="/">
          <H2>Motionlabs</H2>
        </Link>
      </HeaderBox>
    </Header>
  );
};

export default Navbar;
