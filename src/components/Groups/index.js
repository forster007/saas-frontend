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
        {zabbixes.data.map(({ id, zbx_groups, zbx_name }) => (
          <Wrapper key={id}>
            <WrapperTitle>
              <FontAwesomeIcon icon={faArrowRight} />
              {' '}
              {zbx_name}
            </WrapperTitle>
            <WrapperContent>
              {zbx_groups.map(({ groupid, maxTriggerPriority, name }) => (
                <Company key={groupid} maxTriggerPriority={maxTriggerPriority}>
                  <span>{name}</span>
                </Company>
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
