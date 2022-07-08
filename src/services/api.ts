import getConfig from 'next/config';

import axios from 'axios';

const { publicRuntimeConfig } = getConfig();

export const api = axios.create({
  baseURL: publicRuntimeConfig.react_app_api_url,
});
