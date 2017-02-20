angular
.module('app').service('swapiService', swapiService);
function swapiService($http, $q) {

    this.apiRoot = 'https://swapi.co/api/';

    this.search = function (term, endpoint) {
        var defer = $q.defer();
        var url = this.apiRoot + endpoint + '?search=' + encodeURIComponent(term);
        $http.get(url)
        .then(function successCallback(response) {
            defer.resolve(response.data.results);
        }, function errorCallback(error) {
            defer.resolve(error);
        });
        return defer.promise;
    };

    this.get = function (id, endpoint) {
        var defer = $q.defer();
        var url = this.apiRoot + endpoint + '/' + id;
        $http.get(url)
            .then(function successCallback(response) {
                defer.resolve(response.data);
            }, function errorCallback(error) {
                defer.resolve(error);
            });
        return defer.promise;
    };
}