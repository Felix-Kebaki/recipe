import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState ,useContext} from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { GlobalFetchContext } from "../../context/GlobalContext";
import "./navbar.css";

export function Navbar() {
  const { searchParams, setSearchParams ,HandleFormSubmission}=useContext(GlobalFetchContext)
  const [getScroll, setGetScroll] = useState({
    y: 0,
    PrevY: 0,
  });


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
          <img src={Logo} alt="" />
          <div>
            <NavLink className="NavFamily" to="/recipe" activeclassname="active">
              Home
            </NavLink>
            <NavLink
              className="NavFamily"
              to="/about us"
              activeclassname="active"
            >
              About us
            </NavLink>
            <NavLink
              className="NavFamily"
              to="/recipes"
              activeclassname="active"
            >
              Recipes
            </NavLink>
            <NavLink className="NavFamily" to="/blog" activeclassname="active">
              Blog
            </NavLink>
            <NavLink
              className="NavFamily"
              to="/contact"
              activeclassname="active"
            >
              Contact
            </NavLink>
          </div>
        </nav>
        <form className="SearchForm" onSubmit={HandleFormSubmission}>
          <input
            type="text"
            autoComplete="off"
            placeholder="search..."
            value={searchParams}
            onChange={(e) => setSearchParams(e.target.value)}
            id="searchInput"
          />
          <button type="submit" id="SearchBtn">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <div className="SuggestionDiv"></div>
        </form>
      </section>
    </header>
  );
}
