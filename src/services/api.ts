import axios from 'axios';
import Config from 'react-native-config';

export const api = axios.create({
  baseURL:
    Config.API_URL || 'https://61648fc109a29d0017c88de5.mockapi.io/api/v1',
});
