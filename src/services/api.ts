import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.0.2:3333',
});

export default api;

/**
 * IOS com emulador: localhost
 * IOS com fisico: IP da maquina
 * android com fisico: IP da maquina
 *
 *
 * adb reverse tcp: 3333 tcp:3333
 */
