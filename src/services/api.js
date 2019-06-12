import axios from 'axios';
import Store from '../store';

const create = () => {
  const baseURL = process.env.REACT_APP_API_URL;

  const api = axios.create({
    baseURL,
  });

  api.interceptors.request.use((config) => {
    const { token } = Store.getState().auth;
    const { activeZabbix: zabbix } = Store.getState().zabbixes;
    const headers = { ...config.headers };

    if (token) headers.Authorization = `Bearer ${token}`;
    if (zabbix) headers.ZABBIX = zabbix.slug;

    return { ...config, headers };
  });

  const SIGNIN = obj => api.post('/sessions', obj);
  const STOREZABBIX = obj => api.post('/zabbixes', obj);
  const ZABBIXES = obj => api.get('/zabbixes', obj);

  return {
    SIGNIN,
    STOREZABBIX,
    ZABBIXES,
  };
};

export default { create };
