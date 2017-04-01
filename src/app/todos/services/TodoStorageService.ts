import { TodoItem } from './../models/TodoItem';

export class TodoStorageService {

    todoItems: TodoItem[] = [
        new TodoItem('Todo Item 1', false),
        new TodoItem('Todo Item 2', true),
        new TodoItem('Todo Item 3', true),
        new TodoItem('Todo Item 4', false)
    ];

    constructor(private $q: angular.IQService) { }

    getAll(): angular.IPromise<TodoItem[]> {
        return this.$q.resolve(this.todoItems);
    }

    add(todoItem: TodoItem) {
        this.todoItems.push(todoItem);
    }
}
