import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarContainer = styled.div`
  display: flex;
`
export const NavbarLgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
  height: 90vh;
  position: fixed;
  width: 15%;
  margin-top: 65px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavOptionsContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0px;
  margin-top: 0px;
`
export const NavOption = styled.li`
  display: flex;
  flex-direction: row;
  text-align: center;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.activeTabBgColor};
  padding-left: 20px;
  padding-right: 20px;
  width: 205px;
`
export const NavTextEl = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.color};
  font-weight: 450;
  padding-left: 20px;
`
export const ContactDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
`
export const ContactHeading = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 18px;
`
export const ContactIconsContainer = styled.div`
  display: flex;
`
export const ContactImage = styled.img`
  height: 28px;
  width: 28px;
  margin-right: 15px;
`
export const ContactInfoNote = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-weight: 450;
`
export const NavbarSmContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  height: 55px;
  width: 100vw;
  position: fixed;
  bottom: 0;
  align-items: center;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
