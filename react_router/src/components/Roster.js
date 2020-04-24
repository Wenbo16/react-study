import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullRoster from './FullRoster'
import Player from './Player'

// It can be useful to group routes that share a common 
// prefix in the same component. 
// This allows for simpler parent routes and 
// gives us a place to render content that is common across all routes 
// with the same prefix.

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => (
  <Switch>
    <Route exact path='/roster' component={FullRoster}/>
    <Route path='/roster/:number' component={Player}/>
  </Switch>
)


export default Roster
