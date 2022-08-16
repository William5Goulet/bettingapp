import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#002B5B">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            GBets
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/hockey" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="hockey-puck">Hockey</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/basketball" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="basketball-ball">Basketball</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/football" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="football-ball">Football</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/special" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="beer">Special</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default SideBar;