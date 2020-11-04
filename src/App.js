import React from "react";
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from "./components/layout/Navbar";
import Slider from "./components/layout/Slider";
import Main from "./components/layout/main";


function App() {
  return (
    <div >
      <Navbar/>
      <Slider/>
     <Main/>
    </div>
  );
}

export default App;
