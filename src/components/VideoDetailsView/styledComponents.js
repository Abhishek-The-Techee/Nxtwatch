import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
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
export const LoaderContainer = styled.div`
  margin-left: 500px;
  margin-top: 22%;
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
