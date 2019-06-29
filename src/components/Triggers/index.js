import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Paper } from '@material-ui/core';
import MaterialTable from 'material-table';
import TableIcons from '../TableIcons';

import TriggersActions from '../../store/ducks/triggers';
import ZabbixesActions from '../../store/ducks/zabbixes';

class Triggers extends Component {
  static propTypes = {
    getTriggersRequest: PropTypes.func.isRequired,
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

  componentDidMount() {
    const { getTriggersRequest } = this.props;
    getTriggersRequest();
  }

  render() {
    const { triggers, zabbixes } = this.props;

    return zabbixes.data.length ? (
      <MaterialTable
        columns={triggers.columns}
        components={{
          Container: props => <Paper {...props} elevation={0} />,
        }}
        data={zabbixes.activeZabbix ? zabbixes.activeZabbix.zbxTriggers : triggers.data}
        icons={TableIcons}
        style={triggers.style}
        title="Zabbix Triggers"
      />
    ) : null;
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
)(Triggers);
