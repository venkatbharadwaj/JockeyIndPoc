angular.module('jockeyIndPocApp')

    .directive('productDisplay', function () {
        return {
            restrict: 'A',
            transclude: true,
            scope: {
                productsData: '='
            },
            link: function (scope, element, attrs) {

            },
            controller: function ($scope) {
                var panes = $scope.panes = [];

                $scope.select = function (pane) {
                    angular.forEach(panes, function (pane) {
                        pane.selected = false;
                    });
                    pane.selected = true;
                };

                this.addPane = function (pane) {
                    if (panes.length === 0) {
                        $scope.select(pane);
                    }
                    panes.push(pane);
                };
            },
            templateUrl: 'views/singleProduct.html'
        };
    })

    .directive('scrolledToEnd', function () {

        return function (scope, elm, attr) {
            console.log("In scrolledToEnd",scope, elm, attr);
            var raw = elm[0];

            elm.bind('scroll', function () {
                if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                    scope.$apply(attr.whenScrolled);
                }
            });
        };
    })
  .directive('product',function(){
    return {
      restrict:"E",
      scope:{
        item:"&"
      },
      link: function(scope,ele,attrs){
        //console.log("from directive ");
      },
      controller:function($scope,$interval){
        //console.log("from controller ");
        $scope.product = $scope.item();
        $scope.src = $scope.product.tag[0];
        var timer=undefined;

        $scope.largeImgHover = function(tags){
          console.log("hover from directive");
          if ( angular.isDefined(timer) ) return;
          var count = 0;
          timer = $interval(function(){
            if(count >= tags.length-1){
              count=0;
            }else{
              count++;
            }
            $scope.src = tags[count];

          },500);
        };
        $scope.largeImgMleave = function(url){
          console.log("mleave from directive");
          if(angular.isDefined(timer)){
            $interval.cancel(timer);
            console.log("timer stopped");
            timer=undefined;
            $scope.src= url;
          }
        };
      },
      templateUrl:'views/product.html'
    }
  });
