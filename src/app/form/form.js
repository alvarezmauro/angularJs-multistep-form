angular.module('multistepFormApp.form', [
    'ui.router'
])

    .config(function config($stateProvider) {
        $stateProvider
            .state('form', {
                url: '/form',
                views: {
                    "main": {
                        controller: 'formCtrl',
                        templateUrl: 'form/form.tpl.html'
                    }
                },
                data: { pageTitle: 'Form' }
            })

            // nested states
            // each of the form steps will have their own view

            // URL: form/stepOne
            .state('form.stepOne', {
                url: '/stepOne',
                templateUrl: 'form/stepOne.tpl.html'
            })

            // URL: form/stepTwo
            .state('form.stepTwo', {
                url: '/stepTwo',
                templateUrl: 'form/stepTwo.tpl.html'
            })

            // URL: form/stepThree
            .state('form.stepThree', {
                url: '/stepThree',
                templateUrl: 'form/stepThree.tpl.html'
            });

    })

/**
 * And of course we define a controller for our route.
 */
    .controller('formCtrl', function formController($scope) {

        // we will store all of our form data in this object
        $scope.formData = {};

        // function to process the form
        $scope.processForm = function () {
            alert('awesome!');
        };

    })

;

