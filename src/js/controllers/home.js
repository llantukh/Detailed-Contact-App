function HomeController (contactService) {

  let vm = this;
  vm.contacts = [];

  function init () {
    contactService.allContacts().then(function(resp) {
      console.log(resp);
      vm.contacts = resp.data;
    })
  }

  init();

};

HomeController.$inject = ['contactService']
export { HomeController };
