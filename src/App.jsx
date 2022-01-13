import Topbar from "./components/topbar/Topbar.jsx";
import Intro from "./components/intro/Intro.jsx";
import Works from "./components/works/Works.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Contact from "./components/contact/Contact.jsx";
import "./app.scss";
import Menu from "./components/menu/Menu.jsx";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuOpenHandler = () => {
    setMenuOpen((prevState) => !prevState);
  };
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={menuOpenHandler} />
      <Menu menuOpen={menuOpen} setMenuOpen={menuOpenHandler} />
      <div className="sections" onClick={menuOpen === true && menuOpenHandler}>
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
