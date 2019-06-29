import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import ZabbixesActions from '../../store/ducks/zabbixes';

import {
  Company, Container, TitleText, Wrapper, WrapperContent, WrapperTitle,
} from './styles';

class Groups extends Component {
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

  renderContent = () => {
    const { zabbixes } = this.props;
    if (zabbixes.activeZabbix) {
      return (
        <Wrapper>
          <WrapperTitle>
            <FontAwesomeIcon icon={faArrowRight} />
            {' '}
            {zabbixes.activeZabbix.zbxName}
          </WrapperTitle>
          <WrapperContent>
            {zabbixes.activeZabbix.zbxGroups.map(({ groupid, maxTriggerPriority, name }) => (
              <Company key={groupid} maxTriggerPriority={maxTriggerPriority}>
                <span>{name}</span>
              </Company>
            ))}
          </WrapperContent>
        </Wrapper>
      );
    }

    return zabbixes.data.map(({ id, zbxGroups, zbxName }) => (
      <Wrapper key={id}>
        <WrapperTitle>
          <FontAwesomeIcon icon={faArrowRight} />
          {' '}
          {zbxName}
        </WrapperTitle>
        <WrapperContent>
          {zbxGroups.map(({ groupid, maxTriggerPriority, name }) => (
            <Company key={groupid} maxTriggerPriority={maxTriggerPriority}>
              <span>{name}</span>
            </Company>
          ))}
        </WrapperContent>
      </Wrapper>
    ));
  };

  render() {
    const { zabbixes } = this.props;

    return zabbixes.data.length ? (
      <Container>
        <TitleText>
          {zabbixes.activeZabbix ? 'Grupos do Zabbix Ativo' : 'Grupos dos Zabbixes'}
        </TitleText>
        {this.renderContent()}
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
)(Groups);
