import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import FailureView from './components/FailureView'

import ThemeAndVideoContext from './context/ThemeAndVideoContext'

class App extends Component {
  state = {
    isDarkTheme: false,
    activeTab: 'Home',
  }

  changeActiveTab = tab => {
    this.setState({activeTab: tab})
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme, activeTab} = this.state

    return (
      <ThemeAndVideoContext.Provider
        value={{
          isDarkTheme,
          activeTab,
          changeTab: this.changeActiveTab,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route component={FailureView} />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}
export default App
