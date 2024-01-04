import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import Navbar from '../SideNavbar'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import FailureView from '../FailureView'

import {
  TrendingVideosContainer,
  TrendingTitleContainer,
  TrendingIcon,
  TrendingHeading,
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
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        viewCount: each.viewCount,
        publishedAt: each.published_at,
      }))
      this.setState({
        trendingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
      console.log(updatedData)
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetry = () => {
    this.getTrendingVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

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
              </TrendingVideosContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default TrendingVideos
