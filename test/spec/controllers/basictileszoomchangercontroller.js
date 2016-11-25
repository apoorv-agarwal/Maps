'use strict';

describe('Controller: BasictileszoomchangercontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('mapsApp'));

  var BasictileszoomchangercontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BasictileszoomchangercontrollerCtrl = $controller('BasictileszoomchangercontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BasictileszoomchangercontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
