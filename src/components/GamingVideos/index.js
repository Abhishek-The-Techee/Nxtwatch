import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'

import Header from '../Header'
import Navbar from '../SideNavbar'
import FailureView from '../FailureView'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import GamingVideoCard from '../GamingVideoCard'

import {
  GamingVideosContainer,
  GamingTitleContainer,
  GamingIconContainer,
  GamingHeading,
  GamingDataContainer,
  LoaderContainer,
  GamingSuccessContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingVideos extends Component {
  state = {
    gamingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetry = () => {
    this.getGamingVideos()
  }

  renderLoadingView = () => (
    <LoaderContainer>
      <Loader type="ThreeDots" size={35} color=" #3b82f6" />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderSuccessView = () => {
    const {gamingVideos} = this.state

    return (
      <GamingSuccessContainer>
        {gamingVideos.map(each => (
          <GamingVideoCard key={each.id} gamingVideo={each} />
        ))}
      </GamingSuccessContainer>
    )
  }

  renderGamingView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#000000' : '#ebebeb'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          const iconBgColor = isDarkTheme ? '#000000' : '#d7dfe9'

          return (
            <>
              <Header />
              <Navbar />
              <GamingVideosContainer bgColor={bgColor}>
                <GamingTitleContainer>
                  <GamingIconContainer bgColor={bgColor}>
                    <SiYoutubegaming
                      size={35}
                      bgColor={iconBgColor}
                      color="red"
                    />
                  </GamingIconContainer>
                  <GamingHeading color={textColor}>Gaming</GamingHeading>
                </GamingTitleContainer>
                <GamingDataContainer>
                  {this.renderGamingView()}
                </GamingDataContainer>
              </GamingVideosContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default GamingVideos
