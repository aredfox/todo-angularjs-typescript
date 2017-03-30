import * as angular from 'angular';
import { TodoItem } from './../../models/TodoItem';
import { TodoStorageService } from './../../services/TodoStorageService';

export class TodosContainer implements angular.IComponentOptions {
    template: string;
    controller: any;

    constructor() {
        this.template = require('./todos.container.html');
        this.controller = TodosContainerController;
    }
}

class TodosContainerController {
    todoItems: TodoItem[];

    constructor(private todoStorageService: TodoStorageService) { }

    $onInit() {
        this.todoItems = this.todoStorageService.getAll();
    }
}
