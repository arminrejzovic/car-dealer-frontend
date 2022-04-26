import React from 'react';
import './App.css';
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";

import Playground from "./routes/test/Playground";
import LandingPage from "./routes/LandingPage";
import {Container} from "@mui/material";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<LandingPage/>}/>
                <Route path={"/playground"} element={<Playground/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
