import * as angular from 'angular';

export class TodoList implements angular.IComponentOptions {
    template: string;
    bindings: any;

    constructor() {
        this.template = require('./todo-list.component.html');
        this.bindings = {
            todoItems: '=*' // added =* binding until <* is available, see https://github.com/angular/angular.js/issues/15874
        };
    }
}
