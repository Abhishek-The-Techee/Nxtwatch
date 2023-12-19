import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  FailureViewContainer,
  FailureViewImg,
  FailureHeading,
  FailureDesc,
  TryAgainBtn,
} from './styledComponents'

const FailureView = props => {
  const {onRetry} = props

  const onClickTryAgain = () => {
    onRetry()
  }
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureViewImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        const headingColor = isDarkTheme ? '#ffffff' : '#1e293b'

        return (
          <FailureViewContainer>
            <FailureViewImg src={failureViewImage} alt="failure view image" />
            <FailureHeading color={headingColor}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDesc>
              We are having some trouble to complete your request.
            </FailureDesc>
            <FailureDesc>Please try again.</FailureDesc>
            <TryAgainBtn onClick={onClickTryAgain}>Retry</TryAgainBtn>
          </FailureViewContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default FailureView
