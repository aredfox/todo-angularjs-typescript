export const routing = ($stateProvider: angular.ui.IStateProvider) => {
    $stateProvider
        .state('todos', {
            parent: 'app',
            url: '/todos',
            template: '<todos></todos>'
        });
};
