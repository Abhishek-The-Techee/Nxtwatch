import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import Navbar from '../SideNavbar'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import FailureView from '../FailureView'
import TrendingVideoCard from '../TrendingVideoCards'

import {
  TrendingVideosContainer,
  TrendingTitleContainer,
  TrendingIcon,
  TrendingHeading,
  TrendingDataContainer,
  LoaderContainer,
  TrendingSuccessContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingVideos extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      console.log(updatedData)
      this.setState({
        trendingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetry = () => {
    this.getTrendingVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" size={35} color="#3b82f6" />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {trendingVideos} = this.state

    return (
      <TrendingSuccessContainer>
        {trendingVideos.map(each => (
          <TrendingVideoCard key={each.id} Video={each} />
        ))}
      </TrendingSuccessContainer>
    )
  }

  renderTrendingView = () => {
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
              <TrendingVideosContainer bgColor={bgColor}>
                <TrendingTitleContainer>
                  <TrendingIcon bgColor={iconBgColor}>
                    <HiFire size={30} color="red" />
                  </TrendingIcon>
                  <TrendingHeading color={textColor}>Trending</TrendingHeading>
                </TrendingTitleContainer>
                <TrendingDataContainer>
                  {this.renderTrendingView()}
                </TrendingDataContainer>
              </TrendingVideosContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default TrendingVideos
