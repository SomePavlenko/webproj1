import React from "react"; 
import { BrowserRouter,Routes, Route } from "react-router-dom";
import About from "./pages/About";
// import './styles/App.css';

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/about" element={<About/>} />
            </Routes>
  </BrowserRouter>
    )
}

export default App;