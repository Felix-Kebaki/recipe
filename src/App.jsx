import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import "./index.css";
import { Outlet } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { useContext, useEffect, useState } from "react";
import { GlobalFetchContext } from "./context/GlobalContext";

function App() {
  const [opened, setOpened] = useState(false);

  const {loading}=useContext(GlobalFetchContext)

  useEffect(() => {
    if (opened) {
      document
        .querySelector(".OverflowOnMain")
        .classList.add("OverflowOnMainShow");
    } else {
      document
        .querySelector(".OverflowOnMain")
        .classList.remove("OverflowOnMainShow");
    }
  }, [opened]);

  return (
    <main className="MainmainApp">
      {loading ? (
        <div className="LoadingMainDiv">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <Navbar opened={opened} setOpened={setOpened}/>
          <ScrollToTop />
          <Outlet />
          <Footer />
          <div className="OverflowOnMain"></div>
        </>
      )}
    </main>
  );
}

export default App;
