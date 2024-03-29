import styled from 'styled-components'

export const GamingVideosContainer = styled.div`
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
export const GamingTitleContainer = styled.div`
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
export const GamingIconContainer = styled.div`
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
export const GamingHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`
export const GamingDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }
`
export const LoaderContainer = styled.div`
  margin-left: 500px;
  margin-top: 35%;
  height: 100vh;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 200px;
    margin-top: 200px;
  }
`
export const GamingSuccessContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 576px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`
