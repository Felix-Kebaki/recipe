import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import "./index.css";
import { Outlet } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { useEffect, useState } from "react";

function App() {
  const [opened, setOpened] = useState(false); 

  useEffect(()=>{
      document.querySelector(".OverflowOnMain").classList.toggle("OverflowOnMainShow");
  },[opened])


  return (
    <main className="MainmainApp">
      <Navbar opened={opened} setOpened={setOpened} />
      <ScrollToTop />
      <Outlet />
      <Footer />
      <div className="OverflowOnMain"></div>
    </main>
  );
}

export default App;
