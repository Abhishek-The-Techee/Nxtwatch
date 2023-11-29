import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const LoginFormContainer = styled.form`
  height: 70%;
  width: 35%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  @media screen and (max-width: 576px) {
    width: 80%;
    height: 80%;
  }
`

export const FormLogo = styled.img`
  height: 45px;
  margin-bottom: 40px;
  @media screen and (max-width: 576px) {
    height: 36px;
    width: 200px;
  }
`
export const InputFieldsContainer = styled.div`
  margin: 10px;
`

export const InputElement = styled.input`
  font-family: 'Roboto';
  font-size: 14px;
  color: #475569;
  height: 36px;
  width: 380px;
  outline: none;
  margin: 5px 0px 0px 0px;
  border: 1px solid #64748b;
  padding: 10px;
  border-radius: 3px;
`
export const LabelText = styled.label`
  font-family: 'Roboto';
  color: #64748b;
  font-weight: 450;
  font-size: 14px;
  margin: 0px 0px 40px 0px;
`
export const Checkbox = styled.input`
  display: block;
  height: 18px;
  width: 18px;
`
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start
  align-items: center;
  margin-top: 10px;
`
export const CheckboxLabel = styled.label`
  font-family: 'Roboto';
  color: #000000;
  padding-left: 10px;
  padding-top: 4px;
  font-size: 16px;
  font-weight: 410;
`
export const LoginBtn = styled.button`
  height: 40px;
  width: 380px;
  margin: 20px 20px 0px 0px;
  border-radius: 5px;
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 430;
  font-size: 16px;
  @media screen and (max-width: 576px) {
    width: 340px;
  }
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  color: #ff0000;
  font-size: 16px;
  font-weight: 410;
  text-align: start;
`
