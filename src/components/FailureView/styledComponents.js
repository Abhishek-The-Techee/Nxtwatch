import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: none;
`
export const FailureViewImg = styled.img`
  width: 300px;
  margin-top: 60px;
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  color: ${props => props.color};
  font-weight: 430px;
`
export const FailureDesc = styled.p`
  color: #475569;
  font-size: 18px;
  font-family: 'Roboto';
  margin-bottom: 1px;
`
export const TryAgainBtn = styled.button`
  height: 36px;
  width: 100px;
  margin: 10px;
  border-radius: 5px;
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
`
