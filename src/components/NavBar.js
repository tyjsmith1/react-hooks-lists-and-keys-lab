import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navLinks = links.map((link) => (
    <a key={link} href={`#${link}`}>
      {link.charAt(0).toUpperCase() + link.slice(1)}
    </a>
  ));

  return <nav>{navLinks}</nav>;
}

export default NavBar;
