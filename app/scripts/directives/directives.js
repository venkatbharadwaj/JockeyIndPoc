angular.module('jockeyIndPocApp')
  .directive('product',function(){
    return {
      restrict:"E",
      scope:{
        item:"&"
      },
      //replace: true,
      link: function(scope,ele,attrs){
        //console.log("from directive ");
      },
      controller:function($scope,$interval){
        //console.log("from controller ");
        $scope.product = $scope.item();
        $scope.src = $scope.product.tag[0];
        $scope.item = {};
        $scope.item.stylename = $scope.product.stylename;
        $scope.item.collectionname = $scope.product.collectionname;
        $scope.item.onlineprice = $scope.product.onlineprice;
        $scope.item.stylename = $scope.product.stylename;
        /*var itemObj = {
          stylename : $scope.product.stylename,
          collectionname:$scope.product.collectionname,
          onlineprice:$scope.product.onlineprice,
          stylenumber:$scope.product.stylenumber

        };*/

        var timer=undefined;

        $scope.largeImgHover = function(tags,stampObj){
          console.log("hover from directive");
          if(stampObj){
            $scope.item.stylename=stampObj.stylename;
            $scope.item.collectionname = stampObj.collectionname;
            $scope.item.onlineprice = stampObj.onlineprice;
            $scope.item.stylename = stampObj.stylename;
          }
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
        $scope.largeImgMleave = function(url,prod){
          $scope.item.stylename=prod.stylename;
          $scope.item.collectionname = prod.collectionname;
          $scope.item.onlineprice = prod.onlineprice;
          $scope.item.stylename = prod.stylename;
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
