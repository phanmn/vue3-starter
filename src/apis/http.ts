import axios from './axios';
import { AxiosPromise } from 'axios';
import { omit, forIn } from '/@/services/lodash';

const http = {
  client: axios,
  callApi,
};

const apiResources: any = {
};

export default http;

interface CallApiParams {
  resource: string;
  data?: object;
  headers?: object;
  config?: object;
}

function callApi(params: CallApiParams): AxiosPromise {
  const apiSplit = params.resource.split('.');
  const module = apiSplit[0];
  const method = apiSplit[1];
  const fullResource = apiResources[module][method];
  let url: string = fullResource.url;
  const data: any = params.data || {};
  const urlParams = omit(data, ['body']);
  const headers =
    fullResource.headers || params.headers
      ? Object.assign(
        {},
        axios.defaults.headers,
        fullResource.headers,
        params.headers,
      )
      : axios.defaults.headers;

  forIn(urlParams, (value, key) => {
    if (value) {
      url = url.replace('{' + key + '}', value);
    } else {
      const reg = new RegExp(key + '={' + key + '}&?');
      url = url.replace(reg, '');
    }
  });

  url = url.replace(/[&\?]$/, '');
  const config = Object.assign(
    {
      method: fullResource.verb,
      url,
      data: data.body,
      headers,
    },
    params.config,
  );

  return axios.request(config).catch(e => {
    throw e;
  });
}