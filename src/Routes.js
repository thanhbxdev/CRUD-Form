import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListPage from "./pages/ListPage";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";

function Routes() {
    return(
        <Router>
            <Switch>
                <Route path="/list" exact>
                    <ListPage/>
                </Route>
                <Route path="/add" exact>
                    <AddPage/>
                </Route>
                <Route path="/edit/:id" exact>
                    <EditPage/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
