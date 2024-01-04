import styled from 'styled-components'

export const TrendingVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 20px;
  margin-top: 65px;
  padding-left: 207px;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 768px) {
    padding-left: 0px;
  }
`
export const TrendingTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 65px;
  padding-top: 20px;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`
export const TrendingIcon = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #d7dfe9;
  margin: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 768px) {
    align-self: flex-start;
    align-items: center;
    margin-left: 20px;
    margin-top: 0px;
  }
`
export const TrendingHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`
export const TrendingDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 350px;
  }
`
export const LoaderContainer = styled.div`
  margin-left: 50%;
  margin-top: 50%;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 200px;
    margin-top: 200px;
  }
`
export const TrendingSuccessContainer = styled.ul`
  list-style-type: none;
`
