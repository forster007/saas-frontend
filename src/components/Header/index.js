import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import Button from '../../styles/components/Button';
import SimpleModal from '../SimpleModal';

import AuthActions from '../../store/ducks/auth';
import ZabbixesActions from '../../store/ducks/zabbixes';

import {
  Actions,
  ActionButton,
  ActionButtonText,
  Company,
  CompanyLabel,
  CompanyName,
  Container,
  PreHeader,
  PostHeader,
} from './styles';
import logo from '../../assets/logo.png';

class Header extends Component {
  static propTypes = {
    closeZabbixModal: PropTypes.func.isRequired,
    getZabbixesRequest: PropTypes.func.isRequired,
    openZabbixModal: PropTypes.func.isRequired,
    selectZabbix: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
    zabbixes: PropTypes.shape({
      activeZabbix: PropTypes.shape(),
    }).isRequired,
  };

  state = {
    zbxName: '',
    zbxUrl: '',
    zbxUser: '',
    zbxPass: '',
    addZabbix: false,
    exitApp: false,
  };

  componentDidMount() {
    const { getZabbixesRequest } = this.props;
    getZabbixesRequest();
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRemoveZabbix = () => {
    const { selectZabbix } = this.props;
    selectZabbix(null);
  };

  handleSignOut = () => {
    const { signOut } = this.props;
    signOut();
  };

  handleZabbixStore = (e) => {
    e.preventDefault();
    const { storeZabbixRequest } = this.props;
    const {
      zbxName, zbxUrl, zbxUser, zbxPass,
    } = this.state;

    storeZabbixRequest(zbxName, zbxUrl, zbxUser, zbxPass);
  };

  renderCompanyName = () => {
    const { zabbixes } = this.props;
    if (zabbixes.data.length === 0) {
      return 'Nenhum zabbix cadastrado';
    }

    if (zabbixes.activeZabbix) {
      return zabbixes.activeZabbix.zbxName;
    }

    return 'Nenhum zabbix selecionado';
  };

  render() {
    const {
      addZabbix, exitApp, zbxName, zbxUrl, zbxUser, zbxPass,
    } = this.state;
    const { closeZabbixModal, openZabbixModal, zabbixes } = this.props;

    return (
      <Container>
        <PreHeader>
          <img alt="" src={logo} style={{ width: 110 }} />
        </PreHeader>
        <PostHeader>
          <Company>
            <CompanyLabel>ZABBIX ATIVO:</CompanyLabel>
            <CompanyName onClick={this.handleRemoveZabbix}>{this.renderCompanyName()}</CompanyName>
          </Company>

          <Actions>
            <ActionButton
              maxWidth={105}
              onClick={openZabbixModal}
              onMouseEnter={() => this.setState({ addZabbix: true })}
              onMouseLeave={() => this.setState({ addZabbix: false })}
            >
              <FontAwesomeIcon color="#fff" icon={faPlus} size="lg" />
              <ActionButtonText hovered={addZabbix}>New Zabbix</ActionButtonText>
            </ActionButton>
            <ActionButton
              maxWidth={60}
              onClick={this.handleSignOut}
              onMouseEnter={() => this.setState({ exitApp: true })}
              onMouseLeave={() => this.setState({ exitApp: false })}
            >
              <FontAwesomeIcon color="#fff" icon={faSignOutAlt} size="lg" />
              <ActionButtonText hovered={exitApp}>Sair</ActionButtonText>
            </ActionButton>
          </Actions>
        </PostHeader>

        <SimpleModal ActionClose={closeZabbixModal} ActionOpen={zabbixes.zabbixModalOpen}>
          <h1>New Zabbix</h1>
          <form onSubmit={this.handleZabbixStore}>
            <span>Name</span>
            <input name="zbxName" onChange={this.handleInputChange} value={zbxName} />

            <span>URL</span>
            <input name="zbxUrl" onChange={this.handleInputChange} value={zbxUrl} />

            <span>User</span>
            <input name="zbxUser" onChange={this.handleInputChange} value={zbxUser} />

            <span>Password</span>
            <input name="zbxPass" onChange={this.handleInputChange} value={zbxPass} />

            <Button size="big" type="submit">
              Salvar
            </Button>
          </form>
        </SimpleModal>
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
)(Header);
