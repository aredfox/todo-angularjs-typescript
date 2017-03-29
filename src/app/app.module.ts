// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

// application modules
import { moduleName as coreModule } from './core/core.module';
// import { moduleName as contactsModule } from './contacts/contacts.module';
import { moduleName as todosModule } from './todos/todos.module';

export const moduleName =
    angular.module('application', [
        coreModule,
        // contactsModule,
        todosModule
    ]).name;
