function AddController ($state, contactService) {

  let vm = this;
  vm.addContact = addContact;

  function addContact (contact) {
    contactService.addContact(contact).then(function(resp) {
      $state.go('home');
    })
  }

};

AddController.$inject = ['$state', 'contactService']
export { AddController };
