import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ZabbixSwitcher from '../../components/ZabbixSwitcher';
import { Container } from './styles';

class Main extends Component {
  componentDidMount() {
    // api.TESTE('/teste');
  }

  render() {
    return (
      <Container>
        <ZabbixSwitcher />
      </Container>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
