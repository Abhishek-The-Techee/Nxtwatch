import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import FailureView from './components/FailureView'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'

import ThemeAndVideoContext from './context/ThemeAndVideoContext'
import ProtectedRoute from './components/ProtectedRoute'

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
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={GamingVideos} />
          <Route component={FailureView} />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}
export default App
