import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import './App.css'
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    )
  }
}
export default App
