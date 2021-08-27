import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "./navItem.scss";

const NavItem = ({ itemName, itemLink }) => {
  return (
    <li>
      <ScrollLink
        to={itemLink}
        smooth={true}
        exact={true}
        spy={true}
        offset={-80}
      >
        {itemName}
      </ScrollLink>
    </li>
  );
};

export default NavItem;
