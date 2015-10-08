app.service("contactService", function($http, $state) {
  this.addContact = function (data){
    return $http.post("http://localhost:1337/", data);
  }
  this.getContacts = function (data){
    return $http.get("http://localhost:1337/");
  }
});
