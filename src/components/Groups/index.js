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

  render() {
    const { zabbixes } = this.props;

    return (
      <Container>
        <TitleText>Grupos dos Zabbixes</TitleText>
        {zabbixes.data.map(zabbix => (
          <Wrapper>
            <WrapperTitle>
              <FontAwesomeIcon icon={faArrowRight} />
              {' '}
              {zabbix.zbx_name}
            </WrapperTitle>
            <WrapperContent>
              {zabbix.zbx_groups.map(group => (
                <Company key={group.groupid}>{group.name}</Company>
              ))}
            </WrapperContent>
          </Wrapper>
        ))}
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
)(Groups);
