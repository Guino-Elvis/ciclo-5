import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Alumnos from "./pages/Alumnos";
import Cursos from "./pages/Cursos";
import Docentes from "./pages/Docentes";
 
class App extends Component {
  render() {
    return (
      <Router>
          <Header />
        <div className="p-10">
          <Routes>
            <Route exact path="/"  element={<Alumnos/>} />
            <Route path="/docentes"  element={<Docentes/>} />
            <Route path="/cursos"  element={<Cursos/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    );
  }
}
 
export default App;
