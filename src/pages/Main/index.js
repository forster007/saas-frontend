import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import TriggersActions from '../../store/ducks/triggers';
import ZabbixesActions from '../../store/ducks/zabbixes';

import Companys from '../../components/Companys';
import Groups from '../../components/Groups';
import Header from '../../components/Header';
import MenuLeft from '../../components/MenuLeft';

import {
  Container, Content, DataTable, Wrapper,
} from './styles';

class Main extends Component {
  static propTypes = {
    getTriggersRequest: PropTypes.func.isRequired,
    getZabbixesRequest: PropTypes.func.isRequired,
  };

  state = {
    contentHeight: window.innerHeight,
    options: {
      elevation: 0,
      selectableRows: false,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    const { getTriggersRequest, getZabbixesRequest } = this.props;

    getTriggersRequest();
    getZabbixesRequest();
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ contentHeight: window.innerHeight });
  };

  getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTableHeadCell: {
        root: {
          '&:nth-child(1)': {
            width: 70,
          },
        },
      },
    },
  });

  render() {
    const { contentHeight, options } = this.state;
    const { triggers, zabbixes } = this.props;

    return (
      <Container>
        <Header />
        <Content height={contentHeight}>
          <MenuLeft />
          <Wrapper>
            <Companys />
            <Groups />
            <MuiThemeProvider theme={this.getMuiTheme()}>
              <DataTable
                columns={triggers.columns}
                data={zabbixes.activeZabbix ? zabbixes.activeZabbix.zbx_triggers : triggers.data}
                options={options}
                title="Zabbix Triggers"
              />
            </MuiThemeProvider>
          </Wrapper>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  triggers: state.triggers,
  zabbixes: state.zabbixes,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...TriggersActions,
    ...ZabbixesActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
