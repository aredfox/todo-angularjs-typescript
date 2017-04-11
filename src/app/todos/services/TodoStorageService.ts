import { TodoItem } from './../models/TodoItem';
import * as firebase from 'firebase';

export class TodoStorageService {

    constructor(private $log: angular.ILogService, private $firebaseArray: any) { }

    getAll(): angular.IPromise<TodoItem[]> {
        const ref = firebase.database().ref().child('todos');
        return this.$firebaseArray(ref).$loaded();
    }

    add(todoItem: TodoItem): void {
        const ref = firebase.database().ref().child('todos');
        this.$firebaseArray(ref)
            .$add(todoItem)
            .then((ref: any) => {
                this.$log.info(`Added todo item with key '${ref.key}'.`);
            })
            .catch((error: any) => {
                this.$log.warn(`Failed to add todo item: ${error}'.`);
            });
    }

    remove(id: string): void {
        const ref = firebase.database().ref().child('todos');
        this.$firebaseArray(ref)
            .$remove(id)
            .then(() => this.$log.info(`Removed item with key ${id}.`))
            .catch((error: any) => {
                this.$log.warn(`Failed to remove item with key ${id}: ${error}.`);
            });
    }
}
