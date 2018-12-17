import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import RegForm from "./components/RegForm";
import AuthRouter from "./AuthRouter";
import LogInRouter from "./LogInRouter";
import RegRouter from "./RegRouter";

export default () =>
    <Switch>
        <Route path="/login" exact component={LogInRouter} />
        <Route path="/signup" exact component={RegRouter}/>
        <Route path="/main" exact component={AuthRouter}/>
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
    </Switch>;