import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Playground from "./routes/test/Playground";
import LandingPage from "./routes/LandingPage";
import AdminPanel from "./components/admin-panel/AdminPanel";
import AdminPanelLobby from "./components/admin-panel/AdminPanelLobby";
import Oglasi from "./components/admin-panel/Oglasi";
import NewAd from "./components/admin-panel/NewAd";
import EditAd from "./components/admin-panel/EditAd";
import Announcements from "./components/admin-panel/Announcements";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<LandingPage/>}/>
                <Route path={"playground"} element={<Playground/>}/>
                <Route path={"admin"} element={<AdminPanel/>}>
                    <Route index element={<AdminPanelLobby/>}/>
                    <Route path={"oglasi"} element={<Oglasi/>}/>
                    <Route path={"novi"} element={<NewAd/>}/>
                    <Route path={":id"} element={<EditAd/>}/>
                    <Route path={"ponude"}/>
                    <Route path={"saopstenja"} element={<Announcements/>}/>
                    <Route path={"uredipodatke"}>
                        <Route path={}/>
                    </Route>
                    <Route path={"login"}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
