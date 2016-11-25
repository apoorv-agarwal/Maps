'use strict';

describe('Controller: Map1Ctrl', function () {

  // load the controller's module
  beforeEach(module('mapsApp'));

  var Map1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Map1Ctrl = $controller('Map1Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Map1Ctrl.awesomeThings.length).toBe(3);
  });
});
