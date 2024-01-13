import {
  GamingVideoItem,
  GamingImage,
  GamingTitle,
  GamingViews,
  ItemLink,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const GamingVideoCard = props => {
  const {gamingVideo} = props
  const {id, title, thumbnailUrl, viewCount} = gamingVideo

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#ffffff' : '#1e293b'
        const color = isDarkTheme ? '#94a3b8' : '#475569'

        return (
          <ItemLink to={`/videos/${id}`}>
            <GamingVideoItem>
              <GamingImage src={thumbnailUrl} alt="gaming image" />
              <GamingTitle color={headingColor}>{title}</GamingTitle>
              <GamingViews color={color}>{viewCount} Watching</GamingViews>
              <GamingViews color={color}>Worldwide</GamingViews>
            </GamingVideoItem>
          </ItemLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default GamingVideoCard
