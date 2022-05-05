import React from 'react';
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import Playground from "../../routes/test/Playground";
import {AppBar, IconButton, Toolbar} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";

function AdminPanel() {
    return (
        <div>
            <AppBar position="sticky" style={{backgroundColor: "#FA0000"}}>
                <Toolbar style={{ display: "flex", justifyContent: "space-between"}}>
                    <h3>AUTO HASANOVIĆ - ADMIN PANEL</h3>
                    <div style={{ display: "flex", alignItems: "center"}}>
                        <AccountCircle fontSize={"large"}/>
                        <h4>admir_h</h4>
                    </div>
                </Toolbar>
            </AppBar>
            <Outlet/>
        </div>
    );
}

export default AdminPanel;