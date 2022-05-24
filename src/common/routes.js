import React from "react";
import './routes.css';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import NavButton from "../components/navButton";
import Home from "../containers/Home";
import Playstation from "../containers/Playstation";
import Contact from "../containers/Contact";
import NotFound from "../containers/NotFound";



const Routes= () => {
    return (
        <BrowserRouter>
        <div id="omot">
            <header>
            <h1>Emulator Source - No.1 Gaming Spot</h1>
            </header>
            <nav>
                    <NavButton routeTo={"/"} name={"Home"}/>
                    <NavButton routeTo={"/playstation"} name={"Playstation"}/>
                    <NavButton routeTo={"/contact"} name={"Contact Us"}/>
                </nav>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/playstation" component={Playstation} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="*" component={NotFound} />
            </Switch>

            <footer>
                <p>&copy; 2022 Emulator Source - All rights reserved.</p>
            </footer>
        </div>    

        </BrowserRouter>
    )
};

export default Routes;