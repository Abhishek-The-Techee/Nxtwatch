import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  height: 65px;
  background-color: ${props => props.bgColor};
  padding: 5px;
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px 0px 50px;
`
export const HeaderLogo = styled.img`
  height: 36px;
`
export const RightMenuOptionsContainer = styled.div`
  display: flex;
`
export const ThemeBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`

export const ProfileImg = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 20px;
  margin-right: 20px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const MenuIcon = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
