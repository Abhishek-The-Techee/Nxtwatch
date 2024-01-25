import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import FailureView from './components/FailureView'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'
import VideoDetailsView from './components/VideoDetailsView'

import ThemeAndVideoContext from './context/ThemeAndVideoContext'
import ProtectedRoute from './components/ProtectedRoute'

class App extends Component {
  state = {
    isDarkTheme: false,
    activeTab: 'Home',
    savedVideos: [],
  }

  changeActiveTab = tab => {
    this.setState({activeTab: tab})
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  removeVideo = id => {
    const {savedVideos} = this.state
    const updatedSavedVideos = savedVideos.filter(
      eachVideo => eachVideo.id !== id,
    )
    this.setState({savedVideos: updatedSavedVideos})
  }

  render() {
    const {savedVideos, isDarkTheme, activeTab} = this.state

    return (
      <ThemeAndVideoContext.Provider
        value={{
          isDarkTheme,
          activeTab,
          savedVideos,
          changeTab: this.changeActiveTab,
          toggleTheme: this.toggleTheme,
          addVideo: this.addVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={GamingVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailsView}
          />
          <Route component={FailureView} />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}
export default App
