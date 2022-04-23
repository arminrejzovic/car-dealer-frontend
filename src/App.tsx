import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";

import Playground from "./components/test/Playground";

function App() {
  return (
    <div className="App">
        <HashRouter>
            <Routes>
                <Route path={"/playground"} element={<Playground/>}/>
            </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
