import angular from 'angular';

import { routerConfig } from './routes'
import { HomeController } from './controllers/home'
import { DetailsController } from './controllers/details'
import { AddController } from './controllers/add'
import { contactService } from './services/contactServer'

import 'angular-ui-router';


angular
  .module('app', ['ui.router'])
  .config(routerConfig)
  .controller('HomeController', HomeController)
  .controller('DetailsController', DetailsController)
  .controller('AddController', AddController)
  .service('contactService', contactService);
