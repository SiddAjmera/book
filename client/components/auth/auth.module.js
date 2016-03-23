'use strict';

angular.module('bookApp.auth', [
  'bookApp.constants',
  'bookApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
