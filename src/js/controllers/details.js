function DetailsController ($stateParams, contactService) {

  let vm = this;
  vm.contact = {}

  function init () {
    contactService.oneContact($stateParams.id).then(function(resp) {
      vm.contact = resp.data;
    })
  }

  init();

};

DetailsController.$inject = ['$stateParams', 'contactService'];
export { DetailsController };
