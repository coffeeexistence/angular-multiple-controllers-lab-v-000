function ContactController() {
  var vm = this;
  vm.name = "Bill Gates";
  vm.email = "test@test.com";
  vm.phone = "9511234567";
 
  this.changeName = function () {
    vm.name = 'Something else!';
  }
}



angular
    .module('app')
    .controller('ContactController', ContactController);