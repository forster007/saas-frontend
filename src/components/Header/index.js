import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AuthActions from '../../store/ducks/auth';
import ZabbixesActions from '../../store/ducks/zabbixes';

import { Container } from './styles';
import logo from '../../assets/logo.png';

class MenuLeft extends Component {
  state = {};

  render() {
    return (
      <Container>
        <img alt="" src={logo} style={{ width: 150 }} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  zabbixes: state.zabbixes,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...AuthActions,
    ...ZabbixesActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuLeft);
