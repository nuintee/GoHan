import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home__Page'
import Result from  './pages/Result__Page'

import './css/base.css';

const App = () => {
    return (
        <Router>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/result" component = {Result}/>
        </Router>
    )
}

export default App