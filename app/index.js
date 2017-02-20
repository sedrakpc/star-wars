angular
  .module('app', ['ui.router'])
  .config(routesConfig);

function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
    }).hashPrefix('');
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state('home', {
        url: '/',
        component: 'home'
    })
    .state('details', {
        url: '/details/{type}/{id}',
        component: 'swDetails'
    });
}
