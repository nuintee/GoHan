import React from 'react'
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom'

import Home from './pages/Home__Page'
import Result from  './pages/Result__Page'

import './css/base.css';

const App = () => {
    return (
        <React.StrictMode>
            <Router>
                <Route exact path = "/" component = {Home}/>
                <Route exact path = "/result" component = {Result}/>
            </Router>
        </React.StrictMode>
    )
}

export default App