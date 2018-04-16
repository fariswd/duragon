import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../container/HomePage'

export default function SwitchNavigation() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
    </Switch>
  )
}
