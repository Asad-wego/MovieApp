import {RequestType} from './RequestType';

interface SBRequest {
  type: RequestType;
  params?: any;
  urlString: string;
  headers?: any;
  timeout?: number;
}
