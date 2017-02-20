angular
.module('app')
.component('home', {
    templateUrl: 'app/home/home.html',
    controller: homeController,
    controllerAs: 'vm'
});

function homeController(swapiService) {
    var vm = this;
    vm.searchInProgress = false;
    vm.resutl = null;
    vm.resultConfig = {};

    vm.search = function (endpoint, term) {
        vm.searchInProgress = true;
        if (endpoint === 'people') {
            swapiService.search(term, 'people').then(function (data) {
                vm.resultConfig = {
                  titleField: 'name',
                  type:'people'
                };
                vm.resutl = data;
                vm.searchInProgress = false;
            }, vm.handleError);
        } else if (endpoint === 'movies') {
            swapiService.search(term, 'films').then(function (data) {
                vm.resultConfig = {
                    titleField: 'title',
                    type:'films'
                };
                vm.resutl = data;
                vm.searchInProgress = false;
            }, vm.handleError);
        }
    };
    vm.handleError = function(error) {
        vm.resutl = null;
        vm.searchInProgress = false;
    }
}