import * as angular from 'angular';

// components
import { TodoList } from './components/todo-list/todo-list.component';
import { AddTodoItem } from './components/add-todo-item/add-todo-item.component';

// containers
import { TodosContainer } from './containers/todos/todos.container';

// services
import { TodoStorageService } from './services/TodoStorageService';

// routing
import { routing } from './todos.routes';

// configure module
export const moduleName =
    angular.module('application.todos', [
        'ui.router'
    ])

        // components
        .component('todoList', new TodoList())
        .component('addTodoItem', new AddTodoItem())

        // containers
        .component('todos', new TodosContainer())

        // services
        .service('todoStorageService', TodoStorageService)

        // configuration
        .config(routing)

        // return module name
        .name;
