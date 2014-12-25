angular.module('jockeyIndPocApp')

    .factory('apiCallFactory', ['$http', '$q', '$log',
        function ($http, $q, $log) {
            var instance = {};
            var config = null;
            instance.callApi = function (config) {

                var deferred = $q.defer();
//                $http.defaults.headers.common['Authorization'] = global.getAuthData();

                $http(config)
                    .success(function (data, status, header, config) {
                        data.status = status;
                        deferred.resolve(data);
                    })
                    .error(function (data, status, header, config) {
                        data.url = config.url;
                        deferred.reject(data);
                    });
                return deferred.promise;

            };

            return instance;
        }])