import React from 'react';
import { createActions, createReducer } from 'reduxsauce';
import { Priority } from '../../pages/Main/styles';

const { Types, Creators } = createActions({
  getTriggersRequest: null,
  getTriggersSuccess: ['data'],
});

export const TriggersTypes = Types;
export default Creators;

const severities = ['Not classified', 'Information', 'Warning', 'Average', 'High', 'Disaster'];

const INITIAL_STATE = {
  columns: [
    {
      field: 'priority',
      headerStyle: {
        width: 70,
      },
      render: ({ priority }) => <Priority priority={priority}>{severities[priority]}</Priority>,
      title: 'Prioridade',
    },
    {
      field: 'description',
      title: 'Descrição',
    },
  ],
  data: [],
  style: {
    border: '1px solid #ddd',
    margin: '0 30px 20px 10px',
  },
};

export const success = (state, { data }) => ({
  ...state,
  data,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TRIGGERS_SUCCESS]: success,
});
