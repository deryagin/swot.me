var main = angular.module('Swot.Me', ['ngRoute', 'ngMaterial']);

main.config(['$locationProvider',
  function configAppication($locationProvider) {
    $locationProvider.hashPrefix('!');
  }
]);

angular.element(document).ready(function startApplication() {
  angular.bootstrap(document, ['Swot.Me']);
});
