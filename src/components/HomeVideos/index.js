import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import HomeVideoCard from '../HomeVideoCard'

import {
  HomeVideosList,
  NoVideosContainer,
  NoSearchResultImage,
  NoResultHeading,
  NoResultDesc,
  RetryBtn,
} from './styledComponents'

const HomeVideo = props => {
  const {homeVideos, onRetry} = props
  const videosCount = homeVideos.length

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const descColor = isDarkTheme ? '#e2e8f0' : '#475569'

        return videosCount > 0 ? (
          <HomeVideosList>
            {homeVideos.map(each => (
              <HomeVideoCard videoData={each} key={each.id} />
            ))}
          </HomeVideosList>
        ) : (
          <NoVideosContainer>
            <NoSearchResultImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoResultHeading color={headingColor}>
              No Search results found
            </NoResultHeading>
            <NoResultDesc color={descColor}>
              Try different keywords or remove search filter
            </NoResultDesc>
            <RetryBtn onClick={onClickRetry}>Retry</RetryBtn>
          </NoVideosContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default HomeVideo
