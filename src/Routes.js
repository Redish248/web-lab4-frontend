import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import RegForm from "./components/RegForm";
import LogInForm from "./components/LogInForm";
import PointPage from "./components/PointPage";
import {PrivateRoute} from "./PrivateRoute";
import {ProtectedRoute} from "./ProtectedRouter";


export default () =>
    <Switch>
        <ProtectedRoute path="/login" exact component={LogInForm} />
        <ProtectedRoute path="/signup" exact component={RegForm}/>
        <PrivateRoute path="/main" component={PointPage}/>
        <ProtectedRoute path="/" exact component={Home} />
        <Route component={NotFound} />
    </Switch>;

