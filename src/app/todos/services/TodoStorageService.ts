import { TodoItem } from './../models/TodoItem';
import * as firebase from 'firebase';

export class TodoStorageService {
    todosArr: any;

    constructor(private $log: angular.ILogService, private $firebaseArray: any, private $firebaseObject: any) {
        this.getAll().then((arr) => this.todosArr = arr);
    }

    getAll(): angular.IPromise<TodoItem[]> {
        const ref = firebase.database().ref().child('todos');
        return this.$firebaseArray(ref).$loaded();
    }

    add(todoItem: TodoItem): void {
        this.todosArr
            .$add(todoItem)
            .then((ref: any) => {
                this.$log.info(`Added todo item with key '${ref.key}'.`);
            })
            .catch((error: any) => {
                this.$log.warn(`Failed to add todo item: ${error}'.`);
            });
    }

    remove(id: any): void {
        const ref = firebase.database().ref().child('todos').child(id);
        this.$firebaseObject(ref)
            .$remove()
            .then(() => this.$log.info(`Removed item with key ${id}.`))
            .catch((error: any) => {
                this.$log.warn(`Failed to remove item with key ${id}: ${error}.`);
            });
    }

    toggle(todoItem: any): void {
        const item = this.todosArr.$getRecord(todoItem.$id);
        item.completed = !item.completed;
        this.todosArr.$save(item)
            .then((ref: any) => this.$log.info(`Saved/updated item with key ${todoItem.$id} ${ref.key}.`))
            .catch((error: any) => {
                this.$log.warn(`Failed to save/update item with key ${todoItem.$id}: ${error}.`);
            });
    }
}
