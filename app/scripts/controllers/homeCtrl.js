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

            $scope.packs = [1,2,3];
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
                    $scope.productsData = data.response.docs;
                    $scope.src = $scope.productsData[0].tag[0];
                    console.log($scope.productsData);

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

            $scope.loadProductsData();

            $scope.filterBySize = function (size, checkedVal) {
                $log.log(size, checkedVal);
            };

            $scope.filterByPack = function (pack, checkedVal) {
                $log.log(pack,checkedVal);
            };

            $scope.filterByCollection = function (collection, checkedVal) {
                $log.log(collection,checkedVal);
            };
            $scope.loadMore = function() {
                $log.log("In loadMore");
                $scope.loadProductsData();
            };

            $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];


          $scope.addData = function(){
            var item = $scope.productsData[1];
            $scope.productsData.push({
              "id": "18148|2",
              "companyid": 1,
              "siteid": 1,
              "producttypeid": 2,
              "ispublished": 1,
              "isfeatured": 0,
              "isfreebie": 0,
              "isfreeshipping": 0,
              "isgooglecrawl": false,
              "productid": 4842,
              "producttitle": "Charcoal Melange Boxer Brief",
              "productcode": "414899629",
              "suppliercode": "",
              "displaycode": "",
              "productguid": "e850ac45-ebc3-e311-b101-6cae8b415d53",
              "shortdescription": "",
              "longdescription": "9010",
              "genderid": 4,
              "gendername": "Men",
              "styleid": 211,
              "stylename": "Boxer Brief",
              "stylenumber": "1001",
              "partnerid": 6,
              "partnername": "Jockey",
              "brandid": 1,
              "brandname": "Jockey",
              "colorid": 607,
              "colorname": "Grey",
              "swatchid": 261,
              "swatchname": "Charcoal Melange",
              "uomId": 2,
              "uom": "PC",
              "collectionid": 1050,
              "collectionname": "Elance",
              "portalcategoryid1": 0,
              "portalcategoryname1": "",
              "portalcategoryimage1": "",
              "storecategoryid1": 2164,
              "storecategoryname1": "Men",
              "storecategoryimage1": "",
              "portalcategoryid2": 0,
              "portalcategoryname2": "",
              "portalcategoryimage2": "",
              "storecategoryid2": 2273,
              "storecategoryname2": "Innerwear Bottoms",
              "storecategoryimage2": "",
              "portalcategoryid3": 0,
              "portalcategoryname3": "",
              "portalcategoryimage3": "",
              "storecategoryid3": 2506,
              "storecategoryname3": "Boxer Brief",
              "storecategoryimage3": "",
              "storecategoryid4": 0,
              "storecategoryname4": "",
              "storecategoryimage4": "",
              "storecategoryid5": 0,
              "storecategoryname5": "",
              "storecategoryimage5": "",
              "storecategoryid6": 0,
              "storecategoryname6": "",
              "storecategoryimage6": "",
              "productfeatures": [""],
              "productdetails": ["<ul>  <li>Made from premium Combed Cotton fabric</li>  <li>Modern fit </li>  <li>Unique button fly with special placket opening</li>  <li>Durable and soft fabric covered waistband</li>  </ul>"],
              "productcare": [""],
              "shippingreturns": ["<u>Shipping</u>: Dispatched in 1-2 working days. \n\n<br/>\n\n<u>Return</u>: Due to hygiene reason, we are unable to accept return of this product. For details, please refer our <a href = \"/page/return-policy\" target = \"_blank\">Return Policy</a><br/><br/>\n\n"],
              "videopath": [""],
              "fabricid": [0],
              "viewcount": 44,
              "popularity": 0,
              "sortorder": 1,
              "seometatitle": "",
              "seometakeywords": "",
              "seometadescription": "",
              "producturl": "charcoal-melange-boxer-brief-1001",
              "isdisplayonhome": 0,
              "isdisplayoncategory": 0,
              "isallowcod": 0,
              "startdate": "2014-04-30T12:21:25.38Z",
              "enddate": "0001-01-01T00:00:00Z",
              "sizeid": 33,
              "size": "S",
              "transferprice": 0.0,
              "mrp": 219.0,
              "onlineprice": 219.0,
              "discountinpercentage": 0.0,
              "isinventorypublished": true,
              "minimumquantity": 5,
              "maximumquantity": 10000,
              "reorderquantity": 100,
              "isavailable": true,
              "searchtext": "Men,Innerwear Bottoms,Boxer Brief,Charcoal Melange Boxer Brief,Elance,Boxer Brief,1001,Jockey",
              "weight": 104.1,
              "returndays": 7,
              "payinadvance": 0.0,
              "payatmerchant": 0.0,
              "amounttype": "",
              "redemptiontype": "",
              "redemptiondate": "0001-01-01T00:00:00Z",
              "redemptiondays": 0,
              "maximumcoupons": 0,
              "purchasecount": 0,
              "quantityblocked": 0,
              "initialpurchasecount": 0,
              "boost": 1,
              "datepublished": "2014-04-30T12:21:25.38Z",
              "productimages": [
                {"images":["../images/boxerbrief_1001_0107charcoal_mel_large.jpg","../images/boxerbrief_1001_0107grey_mel_large.jpg"]},
                {"images":["../images/boxerbrief_1001_0107charcoal_mel_large.jpg","../images/boxerbrief_1001_0107grey_mel_large.jpg"]}
              ],
              "tag": ["../images/boxerbrief_1001_0107charcoal_mel_large.jpg","../images/boxerbrief_1001_0107white_large.jpg"],
              "associatedstorecategoryids": ["2273",
                "2164",
                "2506"],
              "availablesizes": ["33",
                "34",
                "35",
                "36",
                "37"],
              "datecreated": "2014-04-14T21:11:44.827Z",
              "lastupdated": "2014-08-29T15:33:04.457Z",
              "numberofpieces": 1,
              "minimumprice": 219.0,
              "sapmaterialcode": ["1001-0101-ASSTD"],
              "sapgridvalue": ["S  CHAML"],
              "disclaimertext": [""],
              "stylenote": ["This easy going boxer brief has been designed to give you the ultimate experience in comfort. Featuring a fabric covered waistband, super soft combed cotton fabric and a unique button fly feature. What are you waiting for? Grab a pair today!"],
              "availablesizeIds": "33,34,35,36,37,",
              "nonavailablesizeIds": [""],
              "nonavailablesizes": [""],
              "isnewlaunch": false,
              "availablequantity": 20,
              "collectionurl": "elance",
              "productdefaultimage": "boxerbrief_1001_0107charcoal_mel..jpg|",
              "isuniqueinstyle": 0,
              "isuniqueincolor": 1,
              "totalproductsuniqueincolor": 10,
              "_version_": 1486911774896685056
            });
            //console.log("clicked",$scope.productsData);

          };
          /*var timer=undefined;

          $scope.largeImgHover = function(tags){
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
            if(angular.isDefined(timer)){
              $interval.cancel(timer);
              console.log("timer stopped");
              timer=undefined;
              $scope.src= url;
            }
          };*/



        }]);
