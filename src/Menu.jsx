// Import des pages / composants 
import Counter from "./component/Counter"
import Articles from "./component/Articles"
import Home from "./ Pages/Home"
import Random from "./Random";

// Imports liés au routeur
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Menu() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/random">Random</Link>
        </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter name={name} />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/random" element={<Random />} />
          </Routes>
      </BrowserRouter>
    </>
  )

}

export default Menu;