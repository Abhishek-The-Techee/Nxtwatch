import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  height: 100vh;
  overflow-y: auto;
  padding-top: 60px;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 250px;
  width: 85%;
  padding: 20px;
  background-size: cover;
  margin-left: 206px;

  display: ${props => props.display};
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    background-size: cover;
    width: 100%;
  }
`
export const BannerLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`
export const BannerLogo = styled.img`
  height: 36px;
  width: 180px;
  @media screen and (max-width: 768px) {
    height: 30px;
    width: 100px;
  }
`
export const BannerHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: 430;
  font-size: 24px;
  padding-top: 15px;
  color: #1e293b;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    padding-top: 15px;
  }
`
export const BannerBtn = styled.button`
  height: 36px;
  width: 130px;
  background-color: transparent;
  color: #1e293b;
  font-family: 'Roboto';
  font-weight: 430;
  font-size: 16px;
  outline: none;
  border: 1px solid #000000;
  margin-top: 40px;
`
export const BannerRightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 50%;
`
export const BannerCloseBtn = styled.button`
  border: none;
  background-color: transparent;
  height: 25px;
`
export const SearchContainer = styled.div`
  display: flex;
  margin: 20px;
`
export const SearchInputBox = styled.input`
  height: 38px;
  width: 400px;
  outline: none;
  margin-left: 206px;
  padding: 5px;
  border: 1px solid #94a3b8;
  color: ${props => props.color};
  font-family: 'Roboto';
  background-color: transparent;
  @media screen and (max-width: 768px) {
    margin-left: 20px;
  }
`
export const SearchBtn = styled.button`
  height: 38px;
  width: 80px;
  background-color: #f4f4f4;
  outline: none;
  border: 1px solid #94a3b8;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 206px;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
`
export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (min-width: 768px) {
    margin-left: 207px;
  }
`
