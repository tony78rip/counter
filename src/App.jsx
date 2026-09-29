import  Counter  from "./component/Counter"
import Articles from "./component/Articles"
import Home from "./Pages/Home"
import Random from "./Random"
import Quizz from "./Quizz"
import Api from "./Api"
import Form from "./Form"
import Todo from "./Todo"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {

  let name = "Tom"

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/random">Random</Link>
          <Link to="/quizz">Quizz</Link>
          <Link to="/api">Api</Link>
          <Link to="/form">Form</Link>
          <Link to="/todo">Todo</Link>
        </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter name={name} />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/random" element={<Random />} />
            <Route path="/quizz" element={<Quizz />} />
            <Route path="/api" element={<Api />} />
            <Route path="/form" element={<Form />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
