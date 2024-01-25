import {Link, withRouter} from 'react-router-dom'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {FiLogOut} from 'react-icons/fi'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavbarContainer,
  HeaderLogo,
  RightMenuOptionsContainer,
  ThemeBtn,
  ProfileImg,
  MenuIcon,
  LogoutBtn,
  ModalContainer,
  ModalDescription,
  ButtonsContainer,
  ConfirmBtn,
  CancelBtn,
  LogoutIconBtn,
} from './styledComponents'

const Header = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const bgColor = isDarkTheme ? '#000000' : '#ffffff'
      const color = isDarkTheme ? '#ffffff' : '#1e293b'
      const buttonColor = isDarkTheme ? '#ffffff' : ' #3b82f6'

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

      const onClickLogout = props => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <NavbarContainer bgColor={bgColor}>
          <Link to="/">
            <HeaderLogo src={logoImage} alt="website logo" />
          </Link>
          <RightMenuOptionsContainer>
            <ThemeBtn
              type="button"
              onClick={onClickChangeTheme}
              data-testid="theme"
            >
              {themeIcon}
            </ThemeBtn>
            <ProfileImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <MenuIcon>
              <GiHamburgerMenu size={30} color={color} />
            </MenuIcon>
            <Popup
              modal
              trigger={
                <LogoutBtn bgColor={bgColor} color={buttonColor}>
                  Logout
                </LogoutBtn>
              }
            >
              {close => (
                <ModalContainer>
                  <ModalDescription>
                    Are you sure, you want to logout?
                    <ButtonsContainer>
                      <CancelBtn type="button" onClick={() => close()}>
                        Cancel
                      </CancelBtn>
                      <ConfirmBtn type="button" onClick={onClickLogout}>
                        Confirm
                      </ConfirmBtn>
                    </ButtonsContainer>
                  </ModalDescription>
                </ModalContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <LogoutIconBtn bgColor={bgColor} color={buttonColor}>
                  <FiLogOut size={30} color={color} />
                </LogoutIconBtn>
              }
            >
              {close => (
                <ModalContainer>
                  <ModalDescription>
                    Are you sure, you want to logout?
                    <ButtonsContainer>
                      <CancelBtn type="button" onClick={() => close()}>
                        Cancel
                      </CancelBtn>
                      <ConfirmBtn type="button" onClick={onClickLogout}>
                        Confirm
                      </ConfirmBtn>
                    </ButtonsContainer>
                  </ModalDescription>
                </ModalContainer>
              )}
            </Popup>
          </RightMenuOptionsContainer>
        </NavbarContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)
export default withRouter(Header)
