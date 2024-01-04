import {
  TrendingVideoItem,
  TrendingVideoImage,
  TrendingVideoHeading,
} from './styledComponents'

const TrendingVideoCard = props => {
  const {Video} = props
  const {
    id,
    title,
    thumbnailUrl,
    name,
    profileImageUrl,
    viewCount,
    publishedAt,
  } = props

  return (
    <TrendingVideoItem>
      <TrendingVideoImage src={thumbnailUrl} alt="trending video image" />
      <TrendingVideoHeading>{title}</TrendingVideoHeading>
    </TrendingVideoItem>
  )
}
export default TrendingVideoCard
