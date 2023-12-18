import {Component} from 'react'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import Navbar from '../SideNavbar'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

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
} from './styledComponents'

class Home extends Component {
  state = {
    displayBanner: 'flex',
    searchInput: '',
  }

  onCloseBanner = () => {
    this.setState({displayBanner: 'none'})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
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
                  <SearchBtn>
                    <AiOutlineSearch size={25} />
                  </SearchBtn>
                </SearchContainer>
              </HomeContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default Home
