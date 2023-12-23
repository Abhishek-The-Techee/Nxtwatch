import styled from 'styled-components'

export const HomeVideosList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`
export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NoSearchResultImage = styled.img`
  height: 270px;
  width: 380px;
  margin: 20px;
`
export const NoResultHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: ${props => props.color};
`
export const NoResultDesc = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.color};
`
export const RetryBtn = styled.button`
  height: 36px;
  width: 100px;
  color: #ffffff;
  background-color: #4f46e5;
  border-radius: 5px;
  border: none;
  outline: none;
  margin-bottom: 25px;
`
