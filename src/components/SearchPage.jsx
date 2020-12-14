import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link as RLink } from "react-router-dom";

import {Center, Container, Divider, Link} from '@chakra-ui/react';


import Ramos from './Ramos';
import Home from './Home';

const routes = [
    {
        "id": 1,
        "name": "INFO200",
    },
    {
        "id": 2,
        "name": "INFO208",
    }
]


function SearchPage(){
    return (
    <Container maxW="xxxl" className="Main">
        <Router>
        <Nav />
        <hr />
        {/* Routes */}
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ramos/:id" render={(props) => <Ramos {...props} />} />
            <Route>
                <h1>Not Found</h1>
            </Route>
        </Switch>
    </Router>
    </Container>
    );
}


const Nav = () => (
    <nav>
        <Center height="40px" width="100%">
            <Link m={4} as={RLink} to="/">Home</Link>
            <Divider orientation="vertical" />
            <Link m={4} as={RLink} to="/">Asignaturas</Link>
            <Divider orientation="vertical" />
            <Link m={4} as={RLink} to="/">Cerrar Sesión</Link>
        </Center>
    </nav>
)

/*
<ul style={{display: "flex", justifyContent:"space-evenly"}}>
            <li key="home"><Link to="/">Home</Link></li>
            {
                routes.map( r=>
                <li key={r.id}><Link  to={"ramos/"+ r.id}>{r.name}</Link></li>
                )
            }
        </ul>

*/


export default SearchPage;

