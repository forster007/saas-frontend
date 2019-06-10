import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  getZabbixesRequest: null,
  getZabbixesSuccess: ['data'],
  selectZabbix: ['zabbix'],
  openZabbixModal: null,
  closeZabbixModal: null,
  storeZabbixRequest: ['zbx_name', 'zbx_url', 'zbx_user', 'zbx_pass'],
  storeZabbixSuccess: ['zabbix'],
});

export const ZabbixesTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
  activeZabbix: JSON.parse(localStorage.getItem('@SaaS:zabbix')) || null,
  data: [],
  zabbixModalOpen: false,
});

export const success = (state, { data }) => state.merge({
  data,
});

export const selectZabbix = (state, { zabbix }) => {
  localStorage.setItem('@SaaS:zabbix', JSON.stringify(zabbix));
  return state.merge({ activeZabbix: zabbix });
};

export const storeZabbixSuccess = (state, { zabbix }) => state.merge({
  data: [...state.data, zabbix],
});

export const openZabbixModal = state => state.merge({
  zabbixModalOpen: true,
});

export const closeZabbixModal = state => state.merge({
  zabbixModalOpen: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_ZABBIXES_SUCCESS]: success,
  [Types.SELECT_ZABBIX]: selectZabbix,
  [Types.OPEN_ZABBIX_MODAL]: openZabbixModal,
  [Types.CLOSE_ZABBIX_MODAL]: closeZabbixModal,
  [Types.STORE_ZABBIX_SUCCESS]: storeZabbixSuccess,
});
