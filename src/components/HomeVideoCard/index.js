import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {NavLink, ListItem, ThumbnailImage} from './styledComponents'

const HomeVideoCard = props => {
  const {videoData} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoData

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <NavLink to={`/video/${id}`}>
            <ListItem>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            </ListItem>
          </NavLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default HomeVideoCard
