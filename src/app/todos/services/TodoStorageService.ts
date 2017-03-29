import { TodoItem } from './../models/TodoItem';

export class TodoStorageService {

    todoItems: TodoItem[] = [
        new TodoItem('Vuilbakken', false),
        new TodoItem('Afwas', true)
    ];

    constructor(private $q: angular.IQService) { }

    getAll(): /*angular.IPromise<*/TodoItem[]/*>*/ {
        return /*this.$q.resolve(*/this.todoItems/*)*/;
    }

    add(todoItem: TodoItem) {
        this.todoItems.push(todoItem);
    }
}
