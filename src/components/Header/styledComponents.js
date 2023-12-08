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
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const MenuIcon = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LogoutBtn = styled.button`
  height: 34px;
  width: 80px;
  font-family: 'Roboto';
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  border-color: ${props => props.color};
  border: 1px solid;
  border-radius: 2px;
  font-size: 16px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ModalContainer = styled.div`
  height: 180px;
  width: 350px;
  border-radius: 8px;
  background-color: #e2e8f0;
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media screen and (max-width: 768px) {
    height: 150px;
    width: 250px;
  }
`
export const ModalDescription = styled.p`
  font-family: 'Roboto';
  color: #000000;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  @media screen and (min-width: 768px) {
    padding-top: 20px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  @media screen and (min-width: 768px) {
    margin-top: 50px;
  }
`
export const ConfirmBtn = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  height: 36px;
  width: 90px;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 450;
`

export const CancelBtn = styled.button`
  background-color: transparent;
  color: #000000;
  height: 36px;
  width: 90px;
  border: 1px solid #000000;
  outline: none;
  cursor: pointer;
  font-weight: 450;
`
export const LogoutIconBtn = styled.button`
  background-color: transparent;
  color: #000000;
  height: 36px;
  width: 90px;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 450;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
