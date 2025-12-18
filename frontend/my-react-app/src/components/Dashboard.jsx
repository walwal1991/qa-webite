import React from "react";
import './Css/Dashboard.css';
import { FaBars, FaUserLock, FaClipboardList, FaCogs, FaMapSigns, FaVials, FaQuestionCircle, FaHourglassHalf, FaFileAlt, FaCalendarAlt, FaEye } from "react-icons/fa";
import logo from './Css/icons/ztlogo.jpg';
import  { useState } from "react";
import ProductHistory from "./ProductHistory"; // adjust the path



function Dashboard() {
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState("home");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.toLowerCase() === "product history") {
      setPage("product-history");
    }
  };
  return (
    <div className="dashboard">
      {/* Top Bar */}
      <header className="topbar">
        <div className="logo">
          <img src={logo} alt="zt" />
          <span>Systems</span>
        </div>
        <form onSubmit={handleSearch}>
        <input className="search" type="text" placeholder="Function Search..." value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)} />
        </form>
        <div className="settings">
          <i className="fa fa-cog"></i>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="sidebar">
        <button className="menu-toggle"><FaBars /></button>
        <ul className="menu">
          <li><FaEye /> MYVIEW</li>
          <li><FaUserLock /> ACCESS CONTROL</li>
          <li><FaClipboardList /> ASBUILT</li>
          <li><FaClipboardList /> CHECKLIST</li>
          <li><FaCogs /> CONFIGURATION</li>
          <li><FaMapSigns /> MES NAVIGATION PAGE</li>
          <li><FaVials /> MFGTEST</li>
          <li><FaVials /> MFGTESTCOVERAGE</li>
          <li><FaQuestionCircle /> MRS</li>
          <li><FaHourglassHalf /> OQT</li>
          <li><FaFileAlt /> PRODUCTION ORDER</li>
          <li><FaCalendarAlt /> PRODUCTION SCHEDULE</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="content">
        {page === "product-history" && <ProductHistory />}
      </main>

      {/* Footer */}
      <footer className="footer">
        Copyright © ZT Group Intl INC
      </footer>
    </div>
  );
}

export default Dashboard;
