import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect, useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { GlobalFetchContext } from "../../context/GlobalContext";
import Menu from "../../assets/images/Menu.svg";
import Closed from "../../assets/images/closeMenu.svg";
import "./navbar.css";

export function Navbar({ opened, setOpened }) {
  const [inputSearch, setInputSearch] = useState("");
  const { setSearchParams, setLoading } = useContext(GlobalFetchContext);
  const [getScroll, setGetScroll] = useState({
    y: 0,
    PrevY: 0,
  });
  const navigate = useNavigate();

  const HandleFormSubmission = (e) => {
    setLoading(true);
    e.preventDefault();
    setSearchParams(inputSearch);
    setInputSearch("");
    navigate("/recipes");
    setLoading(false);
  };

  const HandleClickMenu = () => {
    const AppearNav=document.querySelector(".LinksSearchMenuDivWrapper")
    
  if (AppearNav.classList.contains("LinksSearchMenuDivWrapperDisappear")) {
    setOpened(false)
    AppearNav.classList.remove("LinksSearchMenuDivWrapperDisappear")
    document.body.style.overflow = "auto";
  } else {
    AppearNav.classList.add("LinksSearchMenuDivWrapperDisappear")
    document.body.style.overflow = "hidden";
    setOpened(true)
  }
}

  const HandleClickOfLink = () => {
    const AppearNav=document.querySelector(".LinksSearchMenuDivWrapper")
    AppearNav.classList.remove("LinksSearchMenuDivWrapperDisappear")
    document.body.style.overflow = "auto";
    setOpened(false)
  };

  const HandleNavOnScroll = () => {
    setGetScroll((prev) => {
      return {
        y: window.scrollY,
        PrevY: prev.y,
      };
    });
    const headNav = document.querySelector(".MainHeader");
    headNav.style.transition = "transform 0.5s ease-out";

    if (getScroll.y > 15) {
      if (getScroll.y > getScroll.PrevY) {
        headNav.style.transform = "translateY(-10rem)";
      } else if (getScroll.y < getScroll.PrevY) {
        headNav.style.boxShadow = "0rem 0rem 2rem #6565d1 ";
        headNav.style.background = "white";
        headNav.style.transform = "translateY(0rem)";
      }
    }

    if (window.scrollY === 0) {
      headNav.style.background = "transparent";
      headNav.style.boxShadow = "none";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", HandleNavOnScroll);
    return () => window.removeEventListener("scroll", HandleNavOnScroll);
  });

  return (
    <header className="MainHeader">
      <section>
        <nav className="MainNav">
          <div className="ImageLinksInputNav">
            <img src={Logo} alt="SimpleRecipes" id="MainLogoAtNav" />
            <div className="LinksSearchMenuDivWrapper">
              <div className="OnlyLinksOnNav">
                <NavLink
                  onClick={HandleClickOfLink}
                  className="NavFamily"
                  to="/recipe"
                  activeclassname="active"
                >
                  Home
                </NavLink>
                <NavLink
                  onClick={HandleClickOfLink}
                  className="NavFamily"
                  to="/about us"
                  activeclassname="active"
                >
                  About us
                </NavLink>
                <NavLink
                  onClick={HandleClickOfLink}
                  className="NavFamily"
                  to="/recipes"
                  activeclassname="active"
                >
                  Recipes
                </NavLink>
                <NavLink
                  onClick={HandleClickOfLink}
                  className="NavFamily"
                  to="/blog"
                  activeclassname="active"
                >
                  Blog
                </NavLink>
                <NavLink
                  onClick={HandleClickOfLink}
                  className="NavFamily"
                  to="/shop"
                  activeclassname="active"
                >
                  Shop
                </NavLink>
                <NavLink
                  onClick={HandleClickOfLink}
                  className="NavFamily"
                  to="/contact"
                  activeclassname="active"
                >
                  Contact
                </NavLink>
              </div>
              <div className="SearchMenuDivWrapper">
                <div>
                <FontAwesomeIcon icon={faBagShopping} id="ShoppingBagIcon" />
                <FontAwesomeIcon icon={faUser} id="UserIcon" />
                </div>
                <form className="SearchForm" onSubmit={HandleFormSubmission}>
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="search..."
                    value={inputSearch}
                    onChange={(e) => setInputSearch(e.target.value)}
                    id="searchInput"
                  />
                  <button type="submit" id="SearchBtn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                  <div className="SuggestionDiv"></div>
                </form>
              </div>
            </div>
          </div>

          <div className="MenuDivWrapper">
            <img
              src={opened ? Closed : Menu}
              onClick={HandleClickMenu}
              alt=""
            />
          </div>
        </nav>
      </section>
    </header>
  );
}
