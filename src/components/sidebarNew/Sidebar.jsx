import React, {useReducer} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {sideBarMenu, socialIcons} from '../../data/data'


import { BsXLg, BsListNested } from "react-icons/bs";
import { reducer } from "../../hooks/useReducer";

import './sidebar.scss'

const defaultOptions = {
  showAside1: false,
  openCloseNav1: false,
};

const Sidebar = React.memo(()=>{
  const [state, dispatch] = useReducer(reducer, defaultOptions);
    return (
      <>
        <BsListNested/>
        <BsListNested
          onClick={() => dispatch({ type: "OPEN_NAVBAR" })}
          className="menu-icon switch__color"
        />
        <aside
          className={`${state.openCloseNav1 ? "aside open-sidebar" : "aside"} ${
            state.showAside1 ? "aside show-asideBar" : "aside"
          }`}
        >
          <div className="aside-wrapper">
            <BsXLg
              onClick={() => dispatch({ type: "CLOSE_NAVBAR" })}
              className="close-btn switch__color"
            />
            <Link to="/" className="logo-section">
              <h1 className="sidebar__logo">S</h1>
              <span class="switch__color">Sakshi Goyat</span>
            </Link>
            <ul className="side-link">
              {sideBarMenu.map((link, index) => {
                const { text, url, icon } = link;
                return (
                  <li key={index}>
                    <NavLink
                      onClick={() => dispatch({ type: "CLOSE_NAVBAR" })}
                      to={url}
                      className={({ isActive }) => {
                        return isActive
                          ? "nav__links active-links"
                          : "nav__links";
                      }}
                    >
                      {icon}
                      {text}
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            <div className="social-icon">
              {socialIcons.map((icons, index) => {
                return (
                  <a href={icons.url} key={index} target="_blank">
                    {icons.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </aside>
      </>
    );
});

export default Sidebar;