import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import MealDetails from "./components/MealDetails";
import Ingredient from "./components/Ingredient";
import Browse from "./components/Browse";
 import './style.css';


function App() {
    return (
        <Router>
            <Route exact path='/' component={Home}/>
            <Route exact path='/meal/:id' component={MealDetails}/>
            <Route exact path='/ingredient/:name' component={Ingredient} />
            <Route exact path='/browse/:name' component={Browse} />
        </Router>

    );
}

export default App;
