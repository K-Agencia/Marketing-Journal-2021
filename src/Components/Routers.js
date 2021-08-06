import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import Catalogo from './Catalogo';
import Error from './Error';
import Trends from './Trends';

const Routers = () => {

    useEffect(() => {
        ReactGA.initialize('UA-204311468-1');
        // To Report Page View 
        ReactGA.pageview(window.location.pathname + window.location.search);
      }, [])

    return (
        <div className="content">
            <Router>
                <Switch>
                    <Route exact path="/" component={() => <Catalogo titulo="innovaciones"></Catalogo>} />
                    <Route exact path="/implementaciones" component={() => <Catalogo titulo="implementaciones"></Catalogo>} />
                    <Route exact path="/trends" component={Trends} />
                    <Route path="*" component={Error} />
                </Switch>
            </Router>
        </div>

    );
};

export default Routers;