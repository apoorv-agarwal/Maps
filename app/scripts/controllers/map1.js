'use strict';

/**
 * @ngdoc function
 * @name mapsApp.controller:Map1Ctrl
 * @description
 * # Map1Ctrl
 * Controller of the mapsApp
 */
angular.module('mapsApp')
  .controller('Map1Ctrl', [ '$scope', function($scope) {
    angular.extend($scope, {
        defaults: {
            scrollWheelZoom: false
        }
    });
}]);