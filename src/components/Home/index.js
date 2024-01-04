import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import Navbar from '../SideNavbar'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import FailureView from '../FailureView'
import HomeVideo from '../HomeVideos'

import {
  HomeContainer,
  BannerContainer,
  BannerLeftContainer,
  BannerLogo,
  BannerHeading,
  BannerBtn,
  BannerRightContainer,
  BannerCloseBtn,
  SearchContainer,
  SearchInputBox,
  SearchBtn,
  LoaderContainer,
  SuccessContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    displayBanner: 'flex',
    searchInput: '',
    homeVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.initial})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        homeVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getHomeVideos)
  }

  onGetSearchResult = () => {
    this.getHomeVideos()
  }

  onCloseBanner = () => {
    this.setState({displayBanner: 'none'})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderLoadingView = () => (
    <LoaderContainer>
      <Loader type="ThreeDots" size={35} color="#0b69ff" />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderSuccessView = () => {
    const {homeVideos} = this.state
    return (
      <SuccessContainer>
        <HomeVideo onRetry={this.onRetry} homeVideos={homeVideos} />
      </SuccessContainer>
    )
  }

  renderHomeVideosView = () => {
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
    const {searchInput, displayBanner} = this.state

    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#000000' : '#ffffff'
          const textColor = isDarkTheme ? '#ffffff' : '#000000'
          const closeBanner = displayBanner === 'flex' ? 'flex' : 'none'

          return (
            <>
              <Header />
              <Navbar />
              <HomeContainer bgColor={bgColor}>
                <BannerContainer display={closeBanner}>
                  <BannerLeftContainer>
                    <BannerLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <BannerHeading>
                      Buy Nxt Watch Premium prepaid plans with UPI
                    </BannerHeading>
                    <BannerBtn>GET IT NOW</BannerBtn>
                  </BannerLeftContainer>
                  <BannerRightContainer>
                    <BannerCloseBtn onClick={this.onCloseBanner}>
                      <AiOutlineClose size={25} />
                    </BannerCloseBtn>
                  </BannerRightContainer>
                </BannerContainer>
                {/* Search Container */}
                <SearchContainer>
                  <SearchInputBox
                    type="search"
                    placeholder="Search"
                    value={searchInput}
                    onChange={this.onChangeSearchInput}
                    color={textColor}
                  />
                  <SearchBtn onClick={this.onGetSearchResult}>
                    <AiOutlineSearch size={25} />
                  </SearchBtn>
                </SearchContainer>
                {this.renderHomeVideosView()}
              </HomeContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default Home
