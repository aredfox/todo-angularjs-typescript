import { TodoItem } from './../models/TodoItem';
import * as firebase from 'firebase';

export class TodoStorageService {

    /*todoItems: TodoItem[] = [
        new TodoItem('Todo Item 1', false),
        new TodoItem('Todo Item 2', true),
        new TodoItem('Todo Item 3', true),
        new TodoItem('Todo Item 4', false)
    ];*/

    constructor(private $q: angular.IQService, private $firebaseArray: any) { }

    getAll(): angular.IPromise<TodoItem[]> {
        const ref = firebase.database().ref().child('todos');
        /*const todos =*/ return this.$firebaseArray(ref)
            .$loaded();
        /*.then((todosArray: any) => {
            this.todoItems = [];
            for (let todo of todosArray) {
                this.todoItems.push(new TodoItem(todo.title, todo.completed));
            }
            console.log(this.todoItems);
        });*/
        /*return this.$q.resolve(this.todoItems);*/
    }

    add(todoItem: TodoItem) {
        //this.todoItems.push(todoItem);
    }
}
