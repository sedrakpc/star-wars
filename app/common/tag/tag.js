angular
.module('app')
.component('tag', {
    template: '<a ui-sref="details({type:vm.config.type,id:vm.id})"><span ng-bind="vm.item[vm.config.field]"></span></a>',
    controller: tagController,
    controllerAs: 'vm',
    bindings: {
        url: '<',
        config: '<'
    }
});

function tagController($http, $sce) {
    var vm = this;
    this.$onInit = function () {
        $http.get($sce.trustAsUrl(vm.url))
        .then(function successCallback(response) {
            vm.item = response.data;
            vm.id = parseInt(vm.item.url.match(/\d+/));
        }, function errorCallback(error) {
        });
    };
}