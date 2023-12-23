import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavLink = styled(Link)`
  text-decoration: none;
`
export const ListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-left: 0px;
  margin-right: 0px;
  @media screen and (min-width: 768px) {
    width: 330px;
    margin-bottom: 40px;
    margin-right: 20px;
  }
`
export const ThumbnailImage = styled.img`
  width: 100%;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    width: 330px;
  }
`
export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 20px;
  margin-top: 15px;
`
export const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin-bottom: 3px;
  color: ${props => props.color};
  font-weight: 420;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin-top: 2px;
  margin-bottom: 2px;
  color: ${props => props.color};
`
export const ViewsAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin-bottom: 0px;
  margin-top: 1px;
  color: ${props => props.color};
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
