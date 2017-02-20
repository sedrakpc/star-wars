angular
.module('app')
.component('search', {
    templateUrl: 'app/home/search/search.html',
    controller: searchComponentController,
    controllerAs: 'vm',
    bindings: {
        progress: '<',
        search: '&'
    }
});

function searchComponentController() {
    var vm = this;
    vm.endpoint = '';
    vm.placeholder = '';
    vm.searchTerm = '';

    vm.initEndpoint = function(endpoint) {
        if(endpoint === 'people') {
            vm.endpoint = 'people';
            vm.placeholder = 'e.g. Chewbacca, Yoda, Boba Fett';
        } else if (endpoint === 'movies') {
            vm.endpoint = 'movies';
            vm.placeholder = 'e.g. Empire Strikes Back, The Force Awakens';
        }
    };
    vm.initEndpoint('people');

    vm.setEndpoint = function (value) {
        vm.initEndpoint(value);
    };

    vm.onSearch = function() {
        vm.search({endpoint: vm.endpoint, term: vm.searchTerm}, vm.searchTerm);
    }
}
