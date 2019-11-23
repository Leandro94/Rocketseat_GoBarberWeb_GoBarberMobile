import axios from 'axios';
// 10.0.2.2 emulador android studio
const api = axios.create({
  baseURL: 'http://192.168.100.222:3333',
});

export default api;
