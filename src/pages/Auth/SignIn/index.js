import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AuthActions from '../../../store/ducks/auth';

import { Container, SignForm } from '../styles';
import Button from '../../../styles/components/Button';

class SignIn extends Component {
  static propTypes = {
    signInRequest: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { signInRequest } = this.props;

    signInRequest(email, password);
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <SignForm onSubmit={this.handleFormSubmit}>
          <span>E-mail</span>
          <input name="email" onChange={this.handleInputChange} type="email" value={email} />
          <span>Senha</span>
          <input
            name="password"
            onChange={this.handleInputChange}
            type="password"
            value={password}
          />

          <Button size="big" type="submit">
            Entrar
          </Button>
        </SignForm>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ ...AuthActions }, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
