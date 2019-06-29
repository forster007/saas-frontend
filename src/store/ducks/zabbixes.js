import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  getZabbixesRequest: null,
  getZabbixesSuccess: ['data'],
  selectZabbix: ['zabbix'],
  openZabbixModal: null,
  closeZabbixModal: null,
  storeZabbixRequest: ['zbxName', 'zbxUrl', 'zbxUser', 'zbxPass'],
  storeZabbixSuccess: ['zabbix'],
});

export const ZabbixesTypes = Types;
export default Creators;

const INITIAL_STATE = {
  activeZabbix: JSON.parse(localStorage.getItem('@SaaS:zabbix')) || null,
  data: [],
  zabbixModalOpen: false,
};

export const success = (state, { data }) => ({
  ...state,
  data,
});

export const selectZabbix = (state, { zabbix }) => {
  localStorage.setItem('@SaaS:zabbix', JSON.stringify(zabbix));
  return {
    ...state,
    activeZabbix: zabbix,
  };
};

export const storeZabbixSuccess = (state, { zabbix }) => ({
  ...state,
  data: [...state.data, zabbix],
});

export const openZabbixModal = state => ({
  ...state,
  zabbixModalOpen: true,
});

export const closeZabbixModal = state => ({
  ...state,
  zabbixModalOpen: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_ZABBIXES_SUCCESS]: success,
  [Types.SELECT_ZABBIX]: selectZabbix,
  [Types.OPEN_ZABBIX_MODAL]: openZabbixModal,
  [Types.CLOSE_ZABBIX_MODAL]: closeZabbixModal,
  [Types.STORE_ZABBIX_SUCCESS]: storeZabbixSuccess,
});
