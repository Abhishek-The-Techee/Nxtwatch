import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const TrendingVideoItem = styled.li`
  width: 100%;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`
export const TrendingVideoImage = styled.img`
  width: 330px;
  height: 200px;
  @media screen and (max-width: 576px) {
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
    height: 250px;
  }
`
export const TrendingVideoHeading = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 430;
  margin-bottom: 2px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  margin-bottom: 2px;
  margin-top: 2px;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`
export const ViewsAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin-bottom: 2px;
  margin-top: 2px;
  color: ${props => props.color};
  @media screen and (max-width: 576px) {
    padding-left: 10px;
  }
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
export const NameViewContainer = styled.div`
  @media screen and (max-width: 576px) {
    display: flex;
  }
`
export const ItemLink = styled(Link)`
  text-decoration: none;
`
