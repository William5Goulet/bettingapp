import React from "react";
import { Header } from "./NavBar.style";
import { CDBNavbar, CDBInput,CDBNavItem,CDBIcon } from "cdbreact";

const NavBar = () => {

	return (
        <Header style={{background:"#333", color:"#fff"}}>
          <CDBNavbar right dark expand="md" scrolling className="justify-content-start">
            <div className="ml-auto">
            </div>
          </CDBNavbar>
        </Header>
	);
}

export default NavBar;
