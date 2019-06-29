import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ZabbixesActions from '../../store/ducks/zabbixes';

import {
  Company, Container, TitleText, Wrapper,
} from './styles';

class Companys extends Component {
  static propTypes = {
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

  state = {};

  handleZabbixSelect = (zabbix) => {
    const { selectZabbix } = this.props;
    selectZabbix(zabbix);
  };

  render() {
    const { zabbixes } = this.props;
    return zabbixes.data.length ? (
      <Container>
        <TitleText>Zabbixes Cadastrados</TitleText>
        <Wrapper>
          {zabbixes.data.map(zabbix => (
            <Company key={zabbix.id} onClick={() => this.handleZabbixSelect(zabbix)}>
              {zabbix.zbxName}
            </Company>
          ))}
        </Wrapper>
      </Container>
    ) : null;
  }
}

const mapStateToProps = state => ({
  zabbixes: state.zabbixes,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ZabbixesActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Companys);
