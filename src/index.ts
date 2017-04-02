/**
 * Import the polyfills and vendor files
 */
import './polyfills';
import './vendor';

/**
 * Temporary Import angular
 * see: https://github.com/Microsoft/TypeScript/issues/10178
 */
import * as angular from 'angular';

/**
 *  Import module to be bootstrapped
 */
import { moduleName as appModule } from './app/app.module';

/**
 * Bootstrap firebase
 */
import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyBb9nUw2-EuOFiRDlmCGKyBbUkYWDNr30E',
  authDomain: 'todosth-876e4.firebaseapp.com',
  databaseURL: 'https://todosth-876e4.firebaseio.com',
  projectId: 'todosth-876e4',
  storageBucket: 'todosth-876e4.appspot.com',
  messagingSenderId: '777328246324'
};
firebase.initializeApp(firebaseConfig);

/**
 * Bootstrap the application using the imported moduleName
 */
const bootstrapModuleName = angular.module('application.bootstrap', [
  appModule, 'ui.bootstrap', 'firebase'
]).name;

angular.element(function () {
  angular.bootstrap(document, [bootstrapModuleName]);
});
