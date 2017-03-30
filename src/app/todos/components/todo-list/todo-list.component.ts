import * as angular from 'angular';

export class TodoList implements angular.IComponentOptions {
    template: string;
    bindings: any;

    constructor() {
        this.template = require('./todo-list.component.html');
        this.bindings = {
            todoItems: '<'
        };
    }
}
