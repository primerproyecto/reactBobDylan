import { Routes, Route } from "react-router-dom";
import { Cancion } from "./pages/Cancion";
import { Canciones } from "./pages/Canciones";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import ConfirmationCode from "./pages/ConfirmationCode";

import { NavigationLinks } from "./components/NavigationLinks";

import "semantic-ui-css/semantic.min.css";
import { Discografia } from "./pages/Discografia";
import PureSticky from "./components/StickyImage";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <NavigationLinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/canciones" element={<Canciones />} />
        <Route path="/canciones/:id" element={<Cancion />} />
        <Route path="/discografia" element={<Discografia />} />
        <Route path="/users/register" element={<Register />} />
        <Route path="/users/login" element={<Login />} />
        <Route path="/confirmationcode" element={<ConfirmationCode />} />
      </Routes>
      <PureSticky />
    </>
  );
}

export default App;
