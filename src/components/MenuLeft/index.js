import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

import AuthActions from '../../store/ducks/auth';
import ZabbixesActions from '../../store/ducks/zabbixes';

import { Container, Item } from './styles';

class MenuLeft extends Component {
  state = {
    active: 'Dashboards',
    items: [
      {
        icon: faLaptop,
        key: 0,
        title: 'Dashboards',
      },
    ],
  };

  render() {
    const { active, items } = this.state;
    return (
      <Container height={window.innerHeight}>
        {items.map(item => (
          <Item
            active={active === item.title}
            key={item.key}
            onClick={() => this.setState({ active: item.title })}
          >
            <FontAwesomeIcon icon={item.icon} size="xs" />
            <span>{item.title}</span>
          </Item>
        ))}
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
