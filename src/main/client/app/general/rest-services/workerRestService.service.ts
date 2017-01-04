import IHttpService = angular.IHttpService;
import IPromise = angular.IPromise;
import IRequestShortcutConfig = angular.IRequestShortcutConfig
import {Worker} from "../interfaces/worker.interface";
import {Order} from "../interfaces/order.interface";
export class WorkerRestService {
  private restServiceUrl: string;

  constructor(private $http: IHttpService) {
    this.restServiceUrl = 'http://localhost:8080';
  }

  getPositions(): IPromise<any> {
    return this.$http.get(this.restServiceUrl + '/workers/positions')
      .then((response: ng.IHttpPromiseCallbackArg<Worker[]>)=> {
        return response.data;
      })
  }

  getWorkers(): IPromise<any> {
    return this.$http.get(this.restServiceUrl + '/workers/')
      .then((response: ng.IHttpPromiseCallbackArg<Worker[]>)=> {
        return response.data;
      })
  }

  getWorker(id: number): IPromise<any> {
    return this.$http.get(this.restServiceUrl + '/workers/'+id)
      .then((response: ng.IHttpPromiseCallbackArg<Order[]>)=> {
        return response.data;
      })
  }

  save(worker: Worker): IPromise<any> {
    let config: IRequestShortcutConfig;
    return this.$http.post(this.restServiceUrl + '/workers', worker)
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        return response.data;
      })
  }

  update(id: number, worker: Worker): IPromise<any> {
    let config: IRequestShortcutConfig;
    return this.$http.put(this.restServiceUrl + '/workers/' + id, worker)
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        return response.data;
      })
  }

  delete(id:number): IPromise<any> {
    let config: IRequestShortcutConfig;
    return this.$http.delete(this.restServiceUrl + '/workers/' + id)
      .then((response: ng.IHttpPromiseCallbackArg)=> {
        return response.data;
      })
  }

}
