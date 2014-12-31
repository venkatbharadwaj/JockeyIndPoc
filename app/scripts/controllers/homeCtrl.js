'use strict';

/**
 * @ngdoc function
 * @name jockeyIndPocApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jockeyIndPocApp
 */
angular.module('jockeyIndPocApp')

    .controller('HomeCtrl', ["$scope", "$log", "apiCallFactory","$interval",
        function ($scope, $log, apiCallFactory,$interval) {

            $scope.sizes = [];
            $scope.productsData = [];

            var config = {
                method: 'GET',
                url: "assets/productData.json"
            };

            $scope.packs = [1, 2, 3];
            $scope.collections = [
                "24X7 Men",
                "3D Innovations",
                "Comfort Plus",
                "Comfort Stretch",
                "Elance",
                "Gold Edition",
                "Modern Classic",
                "Relax",
                "Sport",
                "Sport Performance",
                "Zone",
                "Zone Stretch"
            ];


            $scope.loadProductsData = function () {
                apiCallFactory
                    .callApi(config)
                    .then(function (data) {
                        $log.log("Success Callback",data.response);
                        //$scope.productsData.push(data.response.docs);
                    if(!$scope.productsData.length){
                      $scope.productsData = data.response.docs;
                    }else {
                      angular.forEach(data.response.docs, function (val, key) {
                        $scope.productsData.push(val);

                      });
                    }
                        angular.forEach(data.response.docs, function (val, key) {
                         angular.forEach(val.availablesizes, function (innerVal, key) {
                         if($scope.sizes.indexOf(innerVal) < 0){
                            $scope.sizes.push(innerVal);
                         }
                         })
                         });

                    }, function (status) {
                        $log.log("Failure Callback");
                    });
            };

            //$scope.loadProductsData();

            $scope.filterBySizeArray = [];


            $scope.filterBySize = function (size, checkedVal) {
                $scope.productsFilterData = [];
                if (checkedVal === true && $scope.filterBySizeArray.indexOf(size) < 0) {
                    $scope.filterBySizeArray.push(size);
                }
                if (checkedVal === false && $scope.filterBySizeArray.indexOf(size) >= 0) {
                    var index = $scope.filterBySizeArray.indexOf(size);
                    $scope.filterBySizeArray.splice(index, 1);
                }

                angular.forEach($scope.productsData, function (val, key) {
                    angular.forEach(val, function (innerVal, innerKey) {
                        $log.log("innerVal : ",innerVal);
                    });
                });

            };

            $scope.filterByPack = function (pack, checkedVal) {
                $log.log(pack, checkedVal);
            };

            $scope.filterByCollection = function (collection, checkedVal) {
                $log.log(collection, checkedVal);
            };
            $scope.loadMore = function() {
                $scope.loadProductsData();
            };

            $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];

        }]);
