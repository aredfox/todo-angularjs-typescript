import * as angular from 'angular';
import { TodoStorageService } from './../../services/TodoStorageService';

export class TodoList implements angular.IComponentOptions {
    template: string;
    bindings: any;
    controller: any;

    constructor() {
        this.template = require('./todo-list.component.html');
        this.bindings = {
            todoItems: '=*' // added =* binding until <* is available, see https://github.com/angular/angular.js/issues/15874
        };
        this.controller = TodoListController;
    }
}

class TodoListController {
    constructor(private todoStorageService: TodoStorageService) { }

    remove(todoItem: any): void {
        console.log(todoItem);
        this.todoStorageService.remove(todoItem.$id);
    }
}
