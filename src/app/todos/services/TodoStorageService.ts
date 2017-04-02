import { TodoItem } from './../models/TodoItem';
import * as firebase from 'firebase';

export class TodoStorageService {

    constructor(private $firebaseArray: any) { }

    getAll(): angular.IPromise<TodoItem[]> {
        const ref = firebase.database().ref().child('todos');
        return this.$firebaseArray(ref).$loaded();
    }

    add(todoItem: TodoItem) {
        // this.todoItems.push(todoItem);
    }
}
