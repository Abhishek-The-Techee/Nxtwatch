import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavLink,
  ListItem,
  ThumbnailImage,
  VideoDetailsContainer,
  ProfileImage,
  DetailsSection,
  VideoTitle,
  ViewsAndDate,
  ChannelName,
  Dot,
} from './styledComponents'

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
        const titleColor = isDarkTheme ? '#f9f9f9' : '#1e293b'
        const color = isDarkTheme ? '#94a3b8' : '#475569'

        return (
          <NavLink to={`/video/${id}`}>
            <ListItem>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <ProfileImage src={profileImageUrl} alt="profile image" />
                <DetailsSection>
                  <VideoTitle color={titleColor}>{title}</VideoTitle>
                  <ChannelName color={color}>{name}</ChannelName>
                  <ViewsAndDate color={color}>
                    {viewCount} views <Dot>&#8226;</Dot> {publishedAt}
                  </ViewsAndDate>
                </DetailsSection>
              </VideoDetailsContainer>
            </ListItem>
          </NavLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default HomeVideoCard
