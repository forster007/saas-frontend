import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ZabbixesActions from '../../store/ducks/zabbixes';

import Companys from '../../components/Companys';
import Groups from '../../components/Groups';
import Header from '../../components/Header';
import MenuLeft from '../../components/MenuLeft';

import { Container, Content, Wrapper } from './styles';

class Main extends Component {
  static propTypes = {
    getZabbixesRequest: PropTypes.func.isRequired,
  };

  state = {
    contentHeight: window.innerHeight,
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);

    const { getZabbixesRequest } = this.props;
    getZabbixesRequest();
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ contentHeight: window.innerHeight });
  };

  render() {
    const { contentHeight } = this.state;

    return (
      <Container>
        <Header />
        <Content height={contentHeight}>
          <MenuLeft />
          <Wrapper>
            <Companys />
            <Groups />
          </Wrapper>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ ...ZabbixesActions }, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Main);
