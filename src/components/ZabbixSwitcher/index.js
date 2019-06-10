import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '../../styles/components/Button';
import Modal from '../Modal';

import AuthActions from '../../store/ducks/auth';
import ZabbixesActions from '../../store/ducks/zabbixes';

import {
  Container, Logout, NewZabbix, Zabbix, ZabbixList,
} from './styles';

class ZabbixSwitcher extends Component {
  static propTypes = {
    closeZabbixModal: PropTypes.func.isRequired,
    getZabbixesRequest: PropTypes.func.isRequired,
    openZabbixModal: PropTypes.func.isRequired,
    selectZabbix: PropTypes.func.isRequired,
    zabbixes: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          zbx_name: PropTypes.string,
        }),
      ),
    }).isRequired,
  };

  state = {
    zbx_name: '',
    zbx_url: '',
    zbx_user: '',
    zbx_pass: '',
  };

  componentDidMount() {
    const { getZabbixesRequest } = this.props;
    getZabbixesRequest();
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleZabbixSelect = (zabbix) => {
    const { selectZabbix } = this.props;
    selectZabbix(zabbix);
  };

  handleZabbixStore = (e) => {
    e.preventDefault();
    const { storeZabbixRequest } = this.props;
    const {
      zbx_name, zbx_url, zbx_user, zbx_pass,
    } = this.state;

    storeZabbixRequest(zbx_name, zbx_url, zbx_user, zbx_pass);
  };

  render() {
    const {
      closeZabbixModal, openZabbixModal, signOut, zabbixes,
    } = this.props;
    const {
      zbx_name, zbx_url, zbx_user, zbx_pass,
    } = this.state;

    return (
      <Container>
        <ZabbixList>
          {zabbixes.data.map(zabbix => (
            <Zabbix key={zabbix.id} onClick={() => this.handleZabbixSelect(zabbix)}>
              <img
                alt={zabbix.zbx_name}
                src={`https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${
                  zabbix.zbx_name
                }`}
              />
            </Zabbix>
          ))}

          <NewZabbix onClick={openZabbixModal}>ADD</NewZabbix>

          {zabbixes.zabbixModalOpen && (
            <Modal>
              <h1>Adicionar Zabbix</h1>
              <form onSubmit={this.handleZabbixStore}>
                <span>Zabbix Name</span>
                <input name="zbx_name" onChange={this.handleInputChange} value={zbx_name} />

                <span>Zabbix URL</span>
                <input name="zbx_url" onChange={this.handleInputChange} value={zbx_url} />

                <span>Zabbix User</span>
                <input name="zbx_user" onChange={this.handleInputChange} value={zbx_user} />

                <span>Zabbix Password</span>
                <input name="zbx_pass" onChange={this.handleInputChange} value={zbx_pass} />

                <Button size="big" type="submit">
                  Salvar
                </Button>
                <Button color="gray" onClick={closeZabbixModal} size="small" type="submit">
                  Cancelar
                </Button>
              </form>
            </Modal>
          )}
        </ZabbixList>
        <Logout onClick={signOut}>Sair</Logout>
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
)(ZabbixSwitcher);
