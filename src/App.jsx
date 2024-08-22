import { Navbar } from "./components/Navbar/Navbar"
import { Footer } from "./components/Footer/Footer"
import './index.css'
import { Outlet } from "react-router-dom"
import { ScrollToTop } from "./components/ScrollToTop"

function App() {

  return (
    <main className="MainmainApp">
      <Navbar/>
      <ScrollToTop/>
      <Outlet/>
      <Footer/>
    </main>
  )
}

export default App
