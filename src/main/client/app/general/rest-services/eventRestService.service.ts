import IHttpService = angular.IHttpService;
import IPromise = angular.IPromise;
import IRequestShortcutConfig = angular.IRequestShortcutConfig;
import {Event} from "../interfaces/event.interface";
export class EventRestService {
  private restServiceUrl: string;

  constructor(private $http: IHttpService) {
    this.restServiceUrl = 'http://127.0.0.1:4567';
  }

  getEvents(): IPromise<any> {
    return this.$http.get(this.restServiceUrl + '/events')
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        return {status: response.status, text: response.statusText, data: response.data};
      })
  }
}
