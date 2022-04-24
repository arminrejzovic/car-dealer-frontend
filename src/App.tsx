import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";

import Playground from "./routes/test/Playground";

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
