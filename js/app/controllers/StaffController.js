function StaffController() {
  this.name = "Steve Jobs";
  this.email = "test@test.com";
  this.phone = "9511234567";
}


angular
    .module('app')
    .controller('StaffController', StaffController);