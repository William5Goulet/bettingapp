import React from "react";
import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import Sidebar from "../SideBar";
import Navbar from "../NavBar";

export const Football = () => {

return(
    <div className="dashboard d-flex">
        <div>
      	    <Sidebar/>
        </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
        <div style={{height:"100%"}}></div>
        <div style={{height:"calc(100% - 64px)", padding:"20px 5%", overflowY:"scroll"}}>
            <h1>Football</h1>
        </div>
        </div>
    </div>

    );
};