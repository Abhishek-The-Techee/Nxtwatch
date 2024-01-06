import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  ItemLink,
  TrendingVideoItem,
  TrendingVideoImage,
  TrendingVideoHeading,
  ChannelName,
  VideoDetailsContainer,
  ViewsAndDate,
  Dot,
  NameViewContainer,
} from './styledComponents'

const TrendingVideoCard = props => {
  const {Video} = props
  const {
    id,
    title,
    thumbnailUrl,
    name,

    viewCount,
    publishedAt,
  } = Video

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#ffffff' : '#1e293b'
        const color = isDarkTheme ? '#94a3b8' : '#475569'

        return (
          <ItemLink to={`/videos/${id}`}>
            <TrendingVideoItem>
              <TrendingVideoImage
                src={thumbnailUrl}
                alt="trending video image"
              />
              <VideoDetailsContainer>
                <TrendingVideoHeading color={headingColor}>
                  {title}
                </TrendingVideoHeading>
                <NameViewContainer>
                  <ChannelName color={color}>{name}</ChannelName>
                  <ViewsAndDate color={color}>
                    {viewCount} views
                    <Dot>&#8226;</Dot>
                    {publishedAt}
                  </ViewsAndDate>
                </NameViewContainer>
              </VideoDetailsContainer>
            </TrendingVideoItem>
          </ItemLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default TrendingVideoCard
