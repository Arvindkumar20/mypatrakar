import React from "react";
import NavLinks from "./NavLinks";
export default function NavBar({ isNav }) {
  return (
    <header
      className={`fixed bg-white w-full ${isNav ? "z-50" : "z-0"} mx-auto  `}
    >
      <NavLinks />
    </header>
  );
}
