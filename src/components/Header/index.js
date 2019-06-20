import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

import AuthActions from '../../store/ducks/auth';
import ZabbixesActions from '../../store/ducks/zabbixes';

import {
  Actions,
  ActionButton,
  Company,
  CompanyLabel,
  CompanyName,
  Container,
  PreHeader,
  PostHeader,
} from './styles';
import logo from '../../assets/logo.png';

class MenuLeft extends Component {
  static propTypes = {
    signOut: PropTypes.func.isRequired,
  };

  state = {};

  handleRemoveZabbix = () => {
    const { selectZabbix } = this.props;
    selectZabbix(null);
  };

  handleSignOut = () => {
    const { signOut } = this.props;
    signOut();
  };

  render() {
    const { zabbixes } = this.props;

    return (
      <Container>
        <PreHeader>
          <img alt="" src={logo} style={{ width: 110 }} />
        </PreHeader>
        <PostHeader>
          <Company>
            <CompanyLabel>ZABBIX ATIVO:</CompanyLabel>
            <CompanyName onClick={this.handleRemoveZabbix}>
              {zabbixes.activeZabbix ? zabbixes.activeZabbix.zbx_name : 'Nenhum zabbix selecionado'}
            </CompanyName>
          </Company>

          <Actions>
            <ActionButton onClick={this.handleSignOut}>
              <FontAwesomeIcon color="#fff" icon={faSignOutAlt} size="lg" />
            </ActionButton>
          </Actions>
        </PostHeader>
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
