import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Main from './Main'
import Register from './Register'

export default class Layout extends React.Component{

    render(){
        return (
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/register" component={Register}/>
            </Switch>
        )
    }
}