import * as angular from 'angular';
import { TodoItem } from './../../models/TodoItem';
import { TodoStorageService } from './../../services/TodoStorageService';

export class AddTodoItem implements angular.IComponentOptions {
    template: string;
    controller: any;

    constructor() {
        this.template = require('./add-todo-item.component.html');
        this.controller = AddTodoItemController;
    }
}

class AddTodoItemController {
    todoItem: TodoItem;

    constructor(private todoStorageService: TodoStorageService) {
        this.reset();
    }

    submit(): void {
        this.todoStorageService.add(this.todoItem);
        console.log('Submitting...');
        console.log(this.todoItem);
        this.reset();
    }

    reset(): void {
        this.todoItem = { title: undefined, completed: false };
        console.log('Resetting...');
        console.log(this.todoItem);
    }
}
