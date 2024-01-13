import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`

export const GamingVideoItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 180px;
  margin-right: 15px;
  margin-bottom: 15px;
`
export const GamingImage = styled.img`
  width: 100%;
  height: 250px;
`
export const GamingTitle = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 18px;
  font-weight: 400px;
  margin-bottom: 1px;
`
export const GamingViews = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  margin-top: 2px;
  margin-bottom: 2px;
  font-size: 16px;
`
