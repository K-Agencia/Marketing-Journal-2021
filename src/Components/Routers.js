import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Catalogo from './Catalogo';
import Error from './Error';

const Routers = () => {
    return (
        <Router>
            <Route exact path="/innovaciones" component={() => <Catalogo titulo="innovaciones"></Catalogo>}/>
            <Route exact path="/implementaciones" component={() => <Catalogo titulo="implementaciones"></Catalogo>}/>
            <Route path="*" component={Error}/>
        </Router>
    );
};

export default Routers;