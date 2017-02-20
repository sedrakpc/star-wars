angular
.module('app')
.component('swDetails', {
    templateUrl: 'app/details/details.html',
    controller: detailsController,
    controllerAs: 'vm'
});

function detailsController($stateParams, swapiService) {
    var vm = this;
    vm.id = $stateParams.id;
    vm.type = $stateParams.type;
    vm.item = null;
    vm.progress = true;
    swapiService.get(vm.id, vm.type).
    then(function (data) {
        vm.item = data;
        vm.progress = false;
    }, function (error) {
        vm.progress = false;
    });
}