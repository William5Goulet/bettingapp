import React from "react";
import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import Sidebar from "../SideBar";
import Navbar from "../NavBar";
import Container from "../Container";

export const Home = () => {
    let items=['Item 1','Item 2','Item 3','Item 4','Item 5'];
return(
    <div className="dashboard d-flex">
        <div>
      	    <Sidebar/>
        </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
        <div style={{height:"100%"}}></div>
        <div style={{height:"calc(100% - 64px)", padding:"20px 5%", overflowY:"scroll"}}>
           
        </div>
        </div>
    </div>

    );
};