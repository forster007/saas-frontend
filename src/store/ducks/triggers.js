import React from 'react';
import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { Priority } from '../../pages/Main/styles';

const { Types, Creators } = createActions({
  getTriggersRequest: null,
  getTriggersSuccess: ['data'],
});

export const TriggersTypes = Types;
export default Creators;

const severities = ['Not classified', 'Information', 'Warning', 'Average', 'High', 'Disaster'];

const INITIAL_STATE = Immutable({
  columns: [
    {
      label: 'Prioridade',
      name: 'priority',
      options: {
        filter: true,
        customBodyRender: value => <Priority priority={value}>{severities[value]}</Priority>,
      },
    },
    {
      name: 'description',
      label: 'Descrição',
    },
  ],
  data: [],
});

export const success = (state, { data }) => state.merge({
  data,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TRIGGERS_SUCCESS]: success,
});
