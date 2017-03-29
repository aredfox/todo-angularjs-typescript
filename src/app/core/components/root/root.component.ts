// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

export class Root implements angular.IComponentOptions {
    template: string;

    constructor() {
        this.template = `
        <h1>TODO</h1>
        <div ui-view></div>
        `;
    }
}
