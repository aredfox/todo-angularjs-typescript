import * as angular from 'angular';

/**
 * Components
 */
import { TodoList } from './components/todo-list/todo-list.component';
import { AddTodoItem } from './components/add-todo-item/add-todo-item.component';
import { TodosContainer } from './containers/todos/todos.container';

/**
 * Services
 */
import { TodoStorageService } from './services/TodoStorageService';

/**
 * Configuration
 */
import { routing } from './todos.routes';

// configure module
export const moduleName =
    angular.module('application.todos', [
        'ui.router'
    ])
        .component('todoList', new TodoList())
        .component('addTodoItem', new AddTodoItem())
        .component('todos', new TodosContainer())
        .service('todoStorageService', TodoStorageService)
        .config(routing)
        .name;
