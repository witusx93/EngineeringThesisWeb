import {OrderRestService} from "../general/rest-services/orderRestService.service";

export class ComponentsModalCtrl {
  private components = [];
  private component = {
    "id": null,
    "orderName": "",
    "width": null,
    "height": null,
    "amount": null,
    "missing": null,
    "comment": ""
  };
  private displayed = [];
  private editMode = false;

  constructor(private orderRestService: OrderRestService, private $uibModal:any, private $uibModalInstance:any, components) {
    this.components = components;
  }

  editComponent(component) {
    this.component = component;
    this.editMode = true;
  }

  add() {
    this.component = null;
    this.editMode = true;
  }

  save(component) {
    if(typeof component.id !== 'undefined' && component.id !== null) {
      var index = this.components.findIndex(c => c.id === component.id);
      this.components.splice(index, 1, component);
    } else {
      this.components.push(component);
    }
    this.component = null;
    this.editMode = false;
  }

  back() {
    this.component = null;
    this.editMode = false;
  }

  delete(component) {
    if(typeof component.id !== 'undefined' && component.id !== null) {
      var index = this.components.findIndex(c => c.id === component.id);
      this.components.splice(index, 1);
    } else {
      var index = this.components.findIndex(c => (c.orderName === component.orderName)
                                            && (c.width === component.width)
                                            && (c.height === component.height)
                                            && (c.amount === component.amount)
                                            && (c.missing === component.missing)
                                            && (c.comment === component.comment));
      this.components.splice(index, 1);
    }
  }

  cancel() {
    this.$uibModalInstance.dismiss();
  }

  ok() {
    this.$uibModalInstance.close();
  }
}