import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import MyToolkit from "./Components/myToolkit/myToolkit";
import Topbar from "./Components/Topbar/Topbar";
import Works from "./Components/Works/Works";
import "./app.scss";
import { useState } from "react";
import Menu from "./Components/Menu/Menu";



function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen}  setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen}  setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <MyToolkit/>
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
