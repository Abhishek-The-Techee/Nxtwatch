import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import Navbar from '../SideNavbar'
import FailureView from '../FailureView'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import PlayVideoView from '../PlayVideoView'

import {VideoDetailsContainer, LoaderContainer} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoDetailsView extends Component {
  state = {
    videoDetails: [],
    isLiked: false,
    isDisLiked: false,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.map(each => ({
        id: each.video_details.id,
        title: each.video_details.title,
        videoUrl: each.video_details.video_url,
        thumbnailUrl: each.video_details.thumbnail_url,
        name: each.video_details.channel.name,
        profileImageUrl: each.video_details.channel.profile_image_url,
        subscriberCount: each.video_details.channel.subscriber_count,
        viewCount: each.video_details.view_count,
        publishedAt: each.video_details.published_at,
        description: each.video_details.description,
      }))
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetry = () => {
    this.getVideoDetails()
  }

  onClickLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  onClickDisLiked = () => {
    this.setState(prevState => ({
      isLiked: false,
      isDisLiked: !prevState.isDisLiked,
    }))
  }

  renderLoadingView = () => (
    <LoaderContainer>
      <Loader type="ThreeDots" size={35} color="#3b82f6" />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderPlayVideoView = () => {
    const {videoDetails, isLiked, isDisLiked} = this.state
    return (
      <PlayVideoView
        videoDetails={videoDetails}
        clickLiked={this.onClickLiked}
        clickDisLiked={this.onClickDisLiked}
        isLiked={isLiked}
        isDisLiked={isDisLiked}
      />
    )
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#000000' : '#ebebeb'

          return (
            <>
              <Header />
              <Navbar />
              <VideoDetailsContainer bgColor={bgColor}>
                {this.renderPlayVideoView()}
              </VideoDetailsContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default VideoDetailsView
