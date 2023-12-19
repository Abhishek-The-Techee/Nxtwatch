import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavLink = styled(Link)`
  text-decoration: none;
`
export const ListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 250px;
  }
`
export const ThumbnailImage = styled.img`
  width: 100%;
`
