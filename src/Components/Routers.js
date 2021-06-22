import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Catalogo from './Catalogo';
import Error from './Error';

const Routers = () => {
    return (
        <div className="content">
            <Router>
                <Switch>
                    <Route exact path="/" component={() => <Catalogo titulo="innovaciones"></Catalogo>} />
                    <Route exact path="/implementaciones" component={() => <Catalogo titulo="implementaciones"></Catalogo>} />
                    <Route path="*" component={Error} />
                </Switch>
            </Router>
        </div>

    );
};

export default Routers;