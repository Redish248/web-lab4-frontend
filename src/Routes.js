import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import LogInForm from "./components/LogInForm";
import RegForm from "./components/RegForm";
import PointPage from "./components/PointPage";

export default () =>
    <Switch>
        <Route path="/login" exact component={LogInForm} />
        <Route path="/signup" exact component={RegForm}/>
        <Route path="/main" exact component={PointPage}/>
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
    </Switch>;