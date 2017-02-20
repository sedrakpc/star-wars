angular
    .module('app')
    .component('viewResult', {
        templateUrl: 'app/home/view-result/view-result.html',
        controller: viewResultController,
        controllerAs: 'vm',
        bindings: {
            progress: '<',
            data: '<',
            config: '<'
        }
    });

function viewResultController($state) {
    var vm = this;

    vm.viewDetails = function (item) {
        // people without id, how???
        var id = parseInt(item.url.match(/\d+/));
        $state.go('details', {type:vm.config.type, id: id});
    };
}
