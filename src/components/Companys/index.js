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

  render() {
    const { zabbixes } = this.props;
    return (
      <Container>
        <TitleText>Zabbixes Cadastrados</TitleText>
        <Wrapper>
          {zabbixes.data.map(zabbix => (
            <Company key={zabbix.id}>{zabbix.zbx_name}</Company>
          ))}
        </Wrapper>
      </Container>
    );
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
