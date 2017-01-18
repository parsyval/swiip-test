export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('phones', {
      url: '/phones',
      templateUrl: 'app/phones/phones.html',
      controller: 'PhonesController',
      controllerAs: 'phones'
    });

  $urlRouterProvider.otherwise('/');
}
