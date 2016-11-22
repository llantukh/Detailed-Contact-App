import { SERVER } from '../server';

function contactService ($http) {

  this.allContacts = function () {
    return $http.get(SERVER);
  }

  this.oneContact = function (id) {
    let url = SERVER + id;
    return $http.get(url);
  }

  this.addContact = function (contact) {
    return $http.post(SERVER, contact);
  }

};

contactService.$inject = ['$http'];
export { contactService };
