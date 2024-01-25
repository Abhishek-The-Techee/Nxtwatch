import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavbarContainer,
  NavbarLgContainer,
  NavOptionsContainer,
  NavOption,
  NavLink,
  NavLinkContainer,
  NavTextEl,
  ContactDetailsContainer,
  ContactHeading,
  ContactIconsContainer,
  ContactImage,
  ContactInfoNote,
  NavbarSmContainer,
} from './styledComponents'

class Navbar extends Component {
  renderNavbar = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, activeTab, changeActiveTab} = value
        const bgColor = isDarkTheme ? '#000000' : '#ffffff'
        const activeTabBgColor = activeTab ? '#475569' : '#cbd5e1'
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        const onClickHomeTab = () => {
          changeActiveTab('Home')
        }

        const onClickTrendingTab = () => {
          changeActiveTab('Trending')
        }

        const onClickGamingTab = () => {
          changeActiveTab('Gaming')
        }

        const onClickSavedTab = () => {
          changeActiveTab('Saved')
        }

        return (
          <NavbarContainer>
            <NavbarLgContainer bgColor={bgColor}>
              <NavOptionsContainer>
                <NavOption>
                  <Link to="/">
                    <NavLinkContainer
                      key="home"
                      activeTabBgColor={
                        activeTab === 'Home' ? activeTabBgColor : 'none'
                      }
                      onClick={onClickHomeTab}
                    >
                      <AiFillHome
                        size={28}
                        color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                      />
                      <NavTextEl color={textColor}>Home</NavTextEl>
                    </NavLinkContainer>
                  </Link>
                </NavOption>
                <NavOption>
                  <Link to="/trending">
                    <NavLinkContainer
                      key="trending"
                      activeTabBgColor={
                        activeTab === 'Trending' ? activeTabBgColor : 'none'
                      }
                      onClick={onClickTrendingTab}
                    >
                      <HiFire
                        size={28}
                        color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                      />
                      <NavTextEl color={textColor}>Trending</NavTextEl>
                    </NavLinkContainer>
                  </Link>
                </NavOption>
                <NavOption>
                  <Link to="/gaming">
                    <NavLinkContainer
                      key="trending"
                      activeTabBgColor={
                        activeTab === 'Gaming' ? activeTabBgColor : 'none'
                      }
                      onClick={onClickGamingTab}
                    >
                      <SiYoutubegaming
                        size={28}
                        color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                      />
                      <NavTextEl color={textColor}>Gaming</NavTextEl>
                    </NavLinkContainer>
                  </Link>
                </NavOption>
                <NavOption>
                  <Link to="/saved-videos">
                    <NavLinkContainer
                      key="saved"
                      activeTabBgColor={
                        activeTab === 'Saved' ? activeTabBgColor : 'none'
                      }
                      onClick={onClickSavedTab}
                    >
                      <CgPlayListAdd
                        size={28}
                        color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                      />
                      <NavTextEl color={textColor}>Saved videos</NavTextEl>
                    </NavLinkContainer>
                  </Link>
                </NavOption>
              </NavOptionsContainer>
              <ContactDetailsContainer>
                <ContactHeading color={textColor}>CONTACT US</ContactHeading>
                <ContactIconsContainer>
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ContactIconsContainer>
                <ContactInfoNote color={textColor}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactInfoNote>
              </ContactDetailsContainer>
            </NavbarLgContainer>
            <NavbarSmContainer bgColor={bgColor}>
              <NavLink to="/">
                <AiFillHome
                  size={28}
                  color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                  onClick={onClickHomeTab}
                />
              </NavLink>

              <NavLink to="/trending">
                <HiFire
                  size={28}
                  color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                  onClick={onClickTrendingTab}
                />
              </NavLink>

              <NavLink to="/gaming">
                <SiYoutubegaming
                  size={28}
                  color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                  onClick={onClickGamingTab}
                />
              </NavLink>

              <NavLink to="/saved-videos">
                <CgPlayListAdd
                  size={28}
                  color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                  onClick={onClickSavedTab}
                />
              </NavLink>
            </NavbarSmContainer>
          </NavbarContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  render() {
    return <>{this.renderNavbar()}</>
  }
}
export default Navbar
