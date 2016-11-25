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
        center: {
            lat: 40.095,
            lng: -3.823,
            zoom: 4
        },

        defaults: {
            scrollWheelZoom: false
        }
    });
}]);
