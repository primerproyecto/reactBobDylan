import { Routes, Route } from "react-router-dom";
import { Cancion } from "./pages/Cancion";
import { Canciones } from "./pages/Canciones";
import { Home } from "./pages/Home";

import { NavigationLinks } from "./components/NavigationLinks";

import "semantic-ui-css/semantic.min.css";
import { Discografia } from "./pages/Discografia";
import PureSticky from "./components/StickyImage";

function App() {
  return (
    <>
      <NavigationLinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/canciones" element={<Canciones />} />
        <Route path="/canciones/:id" element={<Cancion />} />
        <Route path="/discografia" element={<Discografia />} />
      </Routes>
      <PureSticky />
    </>
  );
}

export default App;
