import {Component} from 'react'
import Cookies from 'js-cookie'

import {
  LoginBgContainer,
  LoginFormContainer,
  FormLogo,
  InputFieldsContainer,
  InputElement,
  LabelText,
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  LoginBtn,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    userName: '',
    password: '',
    showSubmitError: false,
    showPassword: false,
    errorMsg: '',
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
    console.log(jwtToken)
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  renderUserName = () => {
    const {userName} = this.state

    return (
      <>
        <LabelText htmlFor="username">USERNAME</LabelText>
        <InputElement
          type="text"
          value={userName}
          placeholder="Username"
          id="username"
          onChange={this.onChangeUserName}
        />
      </>
    )
  }

  renderPassword = () => {
    const {password, showPassword} = this.state
    const passwordType = showPassword ? 'text' : 'password'

    return (
      <>
        <LabelText htmlFor="password">PASSWORD</LabelText>
        <InputElement
          type={passwordType}
          value={password}
          placeholder="Password"
          id="password"
          onChange={this.onChangePassword}
        />
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            id="showPassword"
            onChange={this.onClickShowPassword}
          />
          <CheckboxLabel htmlFor="showPassword">Show Password</CheckboxLabel>
        </CheckboxContainer>
      </>
    )
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {userName, password}
    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {showSubmitError, errorMsg} = this.state

    return (
      <LoginBgContainer>
        <LoginFormContainer onSubmit={this.onSubmitForm}>
          <FormLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="form logo"
          />
          <InputFieldsContainer>{this.renderUserName()}</InputFieldsContainer>
          <InputFieldsContainer>{this.renderPassword()}</InputFieldsContainer>
          <LoginBtn type="submit">Login</LoginBtn>
          {showSubmitError && <ErrorMsg> *{errorMsg}</ErrorMsg>}
        </LoginFormContainer>
      </LoginBgContainer>
    )
  }
}
export default Login
