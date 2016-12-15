"use strict";
/// <reference path="../typings/index.d.ts" />
// import 'jquery';
var angular = require('angular');
require('../bower_components/angular-smart-table/dist/smart-table.min.js');
require('angular-ui-router');
require('templates');
var book_mgmt_module_1 = require('./book-mgmt/book-mgmt.module');
var order_mgmt_module_1 = require('./order-mgmt/order-mgmt.module');
var worker_mgmt_module_1 = require('./worker-mgmt/worker-mgmt.module');
var event_mgmt_module_1 = require('./event-mgmt/event-mgmt.module');
var main_page_module_1 = require('./main-page/main-page.module');
angular.module('app', [main_page_module_1["default"], book_mgmt_module_1["default"], order_mgmt_module_1["default"], worker_mgmt_module_1["default"], event_mgmt_module_1["default"], 'smart-table'])
    .config(function ($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.when('', '/home');
    $locationProvider.html5Mode(false); //tutaj zeby mozna bylo z # cos todo dopytac o co kaman z tym
});

<<<<<<< HEAD
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhDQUE4QztBQUM5QyxtQkFBbUI7QUFDbkIsSUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFDbkMsUUFBTyxpRUFBaUUsQ0FBQyxDQUFBO0FBQ3pFLFFBQU8sbUJBQW1CLENBQUMsQ0FBQTtBQUMzQixRQUFPLFdBQVcsQ0FBQyxDQUFBO0FBTW5CLGlDQUErQiw4QkFDL0IsQ0FBQyxDQUQ0RDtBQUM3RCxrQ0FBZ0MsZ0NBQ2hDLENBQUMsQ0FEK0Q7QUFDaEUsbUNBQWlDLGtDQUNqQyxDQUFDLENBRGtFO0FBQ25FLGtDQUFnQyxnQ0FDaEMsQ0FBQyxDQUQrRDtBQUNoRSxpQ0FBK0IsOEJBRS9CLENBQUMsQ0FGNEQ7QUFFN0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyw2QkFBa0IsRUFBRSw2QkFBa0IsRUFBQyw4QkFBbUIsRUFBRSwrQkFBb0IsRUFBRSw4QkFBbUIsRUFBRSxhQUFhLENBQUMsQ0FBQztLQUMxSSxNQUFNLENBQUMsVUFBVSxrQkFBcUMsRUFBRSxpQkFBbUM7SUFDMUYsa0RBQWtEO0lBQ2xELGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFJLDZEQUE2RDtBQUN0RyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhDQUE4QztBQUM5QyxtQkFBbUI7QUFDbkIsSUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFDbkMsUUFBTyxtQkFBbUIsQ0FBQyxDQUFBO0FBQzNCLFFBQU8sV0FBVyxDQUFDLENBQUE7QUFNbkIsaUNBQStCLDhCQUMvQixDQUFDLENBRDREO0FBQzdELGtDQUFnQyxnQ0FDaEMsQ0FBQyxDQUQrRDtBQUNoRSxtQ0FBaUMsa0NBQ2pDLENBQUMsQ0FEa0U7QUFDbkUsa0NBQWdDLGdDQUNoQyxDQUFDLENBRCtEO0FBQ2hFLGlDQUErQiw4QkFFL0IsQ0FBQyxDQUY0RDtBQUU3RCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLDZCQUFrQixFQUFFLDZCQUFrQixFQUFFLDhCQUFtQixFQUFFLCtCQUFvQixFQUFFLDhCQUFtQixDQUFDLENBQUM7S0FDNUgsTUFBTSxDQUFDLFVBQVUsa0JBQXNDLEVBQUUsaUJBQW9DO0lBQzVGLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUksNkRBQTZEO0FBQ3RHLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
>>>>>>> 125fc2b9c3fe194aaab00190c051980b94ac3b29
