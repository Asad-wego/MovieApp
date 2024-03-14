import {Platform} from 'react-native';
import axios from 'axios';
import type {CancelToken, AxiosResponse} from 'axios';
import {SBRequest} from '../types/Request';
import {RequestType} from '../types/RequestType';

const TIMEOUT = 15000;

const API = axios.create({
  baseURL: 'https://search.imdbot.workers.dev/', //TODO: will update according to staging | production later by using env
  responseType: 'json',
});

API.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    console.log('Error --- ' + JSON.stringify(error));
    // TODO: can implement logic further i.e. customize error message
  },
);

export async function process<T = any, R = T>(
  request: SBRequest,
  token: CancelToken,
): Promise<AxiosResponse<R>> {
  const headers = {
    ...axios.defaults.headers,
    ...request.headers,
    'App-Type': Platform.OS == 'ios' ? 'ios' : 'android',
    'App-Version': '1.1.1', //TODO: will update dynamically
    //TODO: can add more as per app requirements
  };
  switch (request.type) {
    case RequestType.GET:
      console.log('API ==>', headers);
      const getResponse = await API.get<R>(request.urlString, {
        cancelToken: token,
        headers: headers,
        timeout: TIMEOUT,
      });
      return getResponse;
    case RequestType.POST:
      console.log('POST API ==>', request.urlString, request.params, headers);
      const postResponse = await API.post(request.urlString, request.params, {
        cancelToken: token,
        headers: headers,
        timeout: TIMEOUT,
      });
      return postResponse;
    case RequestType.PUT:
      const putResponse = await API.put(request.urlString, request.params, {
        cancelToken: token,
        headers: headers,
        timeout: TIMEOUT,
      });
      return putResponse;
    case RequestType.PATCH:
      const patchResponse = await API.patch(request.urlString, request.params, {
        cancelToken: token,
        headers: headers,
        timeout: TIMEOUT,
      });
      return patchResponse;
    case RequestType.DELETE:
      console.log('API DELETE==>', request.urlString);
      const deleteResponse = await API.delete(request.urlString, {
        cancelToken: token,
        headers: headers,
        timeout: TIMEOUT,
        data: request.params,
      });
      return deleteResponse;
  }
}
