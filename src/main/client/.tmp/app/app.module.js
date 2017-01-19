/// <reference path="../typings/index.d.ts" />
"use strict";
var angular = require('angular');
require('../bower_components/angular-smart-table/dist/smart-table.min.js');
require('../bower_components/angular-aria/angular-aria.js');
require('../bower_components/angular-animate/angular-animate.js');
require('../bower_components/angular-material/angular-material.js');
require('../bower_components/angular-loading-bar/build/loading-bar.min.js');
require('angular-ui-router');
require('templates');
require('angular-ui-bootstrap');
var order_mgmt_module_1 = require('./order-mgmt/order-mgmt.module');
var worker_mgmt_module_1 = require('./worker-mgmt/worker-mgmt.module');
var event_mgmt_module_1 = require('./event-mgmt/event-mgmt.module');
var customer_mgmt_module_1 = require('./customer-mgmt/customer-mgmt.module');
var main_page_module_1 = require('./main-page/main-page.module');
var login_page_module_1 = require('./login-page/login-page.module');
angular.module('app', [
    login_page_module_1["default"],
    main_page_module_1["default"],
    order_mgmt_module_1["default"],
    worker_mgmt_module_1["default"],
    event_mgmt_module_1["default"],
    customer_mgmt_module_1["default"],
    'smart-table',
    'ui.bootstrap',
    'ngMaterial',
    'ngAnimate',
    'angular-loading-bar'
])
    .config(function ($urlRouterProvider, $locationProvider) {
    //todo to import,$translateProvider : any
    // let configureTranslations = function(){
    //   $translateProvider.useStaticFilesLoader({
    //     files: [
    //       {prefix: 'general/i18n/frontwit-labels-',
    //       suffix: '.json'}
    //     ]
    //   });
    // };
    $urlRouterProvider.when('', '/home');
    $locationProvider.html5Mode(false); //tutaj zeby mozna bylo z # cos todo dopytac o co kaman z tym
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQThDOztBQUU5QyxJQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUNuQyxRQUFPLGlFQUFpRSxDQUFDLENBQUE7QUFDekUsUUFBTyxrREFBa0QsQ0FBQyxDQUFBO0FBQzFELFFBQU8sd0RBQXdELENBQUMsQ0FBQTtBQUNoRSxRQUFPLDBEQUEwRCxDQUFDLENBQUE7QUFDbEUsUUFBTyxrRUFBa0UsQ0FBQyxDQUFBO0FBQzFFLFFBQU8sbUJBQW1CLENBQUMsQ0FBQTtBQUMzQixRQUFPLFdBQVcsQ0FBQyxDQUFBO0FBQ25CLFFBQU8sc0JBQXNCLENBQUMsQ0FBQTtBQUs5QixrQ0FBZ0MsZ0NBQ2hDLENBQUMsQ0FEK0Q7QUFDaEUsbUNBQWlDLGtDQUNqQyxDQUFDLENBRGtFO0FBQ25FLGtDQUFnQyxnQ0FDaEMsQ0FBQyxDQUQrRDtBQUNoRSxxQ0FBbUMsc0NBQ25DLENBQUMsQ0FEd0U7QUFDekUsaUNBQStCLDhCQUMvQixDQUFDLENBRDREO0FBQzdELGtDQUFnQyxnQ0FFaEMsQ0FBQyxDQUYrRDtBQUloRSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtJQUNwQiw4QkFBbUI7SUFDbkIsNkJBQWtCO0lBQ2xCLDhCQUFtQjtJQUNuQiwrQkFBb0I7SUFDcEIsOEJBQW1CO0lBQ25CLGlDQUFzQjtJQUN0QixhQUFhO0lBQ2IsY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gscUJBQXFCO0NBQ3RCLENBQUM7S0FDQyxNQUFNLENBQUMsVUFBVSxrQkFBc0MsRUFBRSxpQkFBb0M7SUFDNUYseUNBQXlDO0lBQ3pDLDBDQUEwQztJQUMxQyw4Q0FBOEM7SUFDOUMsZUFBZTtJQUNmLGtEQUFrRDtJQUNsRCx5QkFBeUI7SUFDekIsUUFBUTtJQUNSLFFBQVE7SUFDUixLQUFLO0lBQ0wsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBSSw2REFBNkQ7QUFDdEcsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvYXBwIn0=
