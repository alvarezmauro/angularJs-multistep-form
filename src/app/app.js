angular.module( 'multistepFormApp', [
  'templates-app',
  'templates-common',
  'multistepFormApp.form',
  'ui.router',
  'ngAnimate'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {

        // catch all route
        // send users to the form page*/
        $urlRouterProvider.otherwise('/form/stepOne');

})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Multi-Step Form App' ;
    }
  });
})

;

