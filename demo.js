(function () {
    'use strict';

    angular
        .module('demoApp', ['ng-duallist'])
        .controller('demoController', demoController);

    demoController.$inject = ['$rootScope'];

    /* @ngInject */
    function demoController($rootScope) {
        var vm = this;
        vm.property = 'demoController';


        activate();

        ////////////////

        function activate() {


            vm.leftValue = [{
                'name': 'left1'
            }, {
                'name': 'left2'
            }, {
                'name': 'left3'
            }, {
                'name': 'left4'
            }, {
                'name': 'left5'
            }, {
                'name': 'left6'
            }, {
                'name': 'left7'
            }, {
                'name': 'left8'
            }, {
                'name': 'left9'
            }]
            vm.rightValue = [{
                'name': 'satish2'
            }, {
                'name': 'manish2'
            }]

        }
    }
})();