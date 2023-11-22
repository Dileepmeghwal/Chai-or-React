// Sidebar.js

import React, { useState } from "react";


const LeftSidebar = () => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleSubmenu = (tab) => {
    setActiveTab(tab === activeTab ? null : tab);
  };

  return (
    <div className="sidebar">
      <ul>
        <li
          onClick={() => toggleSubmenu("dashboard")}
          className={`tab ${activeTab === "dashboard" ? "active" : ""}`}
        >
          Dashboard
          {activeTab === "dashboard" && (
            <ul className="submenu">
              <li>Submenu Item 1</li>
              <li>Submenu Item 2</li>
            </ul>
          )}
        </li>
        <li
          onClick={() => toggleSubmenu("settings")}
          className={`tab ${activeTab === "settings" ? "active" : ""}`}
        >
          Settings
          {activeTab === "settings" && (
            <ul className="submenu">
              <li>Submenu Item 3</li>
              <li>Submenu Item 4</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
