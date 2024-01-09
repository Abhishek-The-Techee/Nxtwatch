import {Component} from 'react'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import Navbar from '../SideNavbar'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  GamingVideosContainer,
  GamingTitleContainer,
  GamingIconContainer,
  GamingHeading,
} from './styledComponents'

class GamingVideos extends Component {
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
                  <GamingIconContainer>
                    <SiYoutubegaming
                      size={35}
                      bgColor={iconBgColor}
                      color="red"
                    />
                  </GamingIconContainer>
                  <GamingHeading>Gaming</GamingHeading>
                </GamingTitleContainer>
              </GamingVideosContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default GamingVideos
