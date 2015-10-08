app.controller('contactCtrl', function($scope, $http, contactService){
  $scope.addNewContact = function(contact){
    contactService.addContact(contact);
  }
});
