import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavbarContainer,
  HeaderLogo,
  RightMenuOptionsContainer,
  ThemeBtn,
  ProfileImg,
  MenuIcon,
} from './styledComponents'

const Header = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const bgColor = isDarkTheme ? '#000000' : '#ffffff'
      const color = isDarkTheme ? '#ffffff' : '#1e293b'

      const logoImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const themeIcon = isDarkTheme ? (
        <BsBrightnessHigh color="#ffffff" size={30} />
      ) : (
        <BsMoon size={30} />
      )

      const onClickChangeTheme = () => {
        toggleTheme()
      }

      return (
        <NavbarContainer bgColor={bgColor}>
          <HeaderLogo src={logoImage} alt="Header Logo" />
          <RightMenuOptionsContainer>
            <ThemeBtn type="button" onClick={onClickChangeTheme}>
              {themeIcon}
            </ThemeBtn>
            <ProfileImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <MenuIcon>
              <GiHamburgerMenu size={30} color={color} />
            </MenuIcon>
          </RightMenuOptionsContainer>
        </NavbarContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)
export default Header
