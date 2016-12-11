
  
 var config = {
    apiKey: "AIzaSyCBNzlAWE4xyJ9YdYRymo7WEgY1gxOVhcE",
    authDomain: "fresh-inventory.firebaseapp.com",
    databaseURL: "https://fresh-inventory.firebaseio.com",
    storageBucket: "fresh-inventory.appspot.com",
    messagingSenderId: "566408288574"
  };
  firebase.initializeApp(config);
  
var freshInventory = angular.module('freshInventory', ["firebase"]);
freshInventory.controller("itemList", function ($scope, $firebaseObject, $firebaseArray){

    var database = firebase.database();
    var il = database.ref("item-list");
    
    var obj = $firebaseObject(il);
    obj.$bindTo($scope, "itemlist");
    il.on('value', getData, errData);
    
    function getData(data){
 
     console.log(data.val());
     var itemlist = data.val();
     var keys = Object.keys(itemlist);
     console.log(keys);
      //$scope.itemlist= data.val();
    }
     function errData(err){
     console.log(err);  
    }
    
 
    //var syncObject = $firebaseObject(ref);
    //syncObject.$bindTo($scope, "itemList");
    //dummy data until FB becomes readable
    /*$scope.items = [
        { 'name': 'Bananas',
        'upc': 4011,
        'bulk': true,
        'picture': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Cavendish_Banana_DS.jpg/220px-Cavendish_Banana_DS.jpg',
        'description': 'The fruits of the Cavendish bananas are eatn raw, used in baking, fruit salads, fruit compotes, and to complement foods. The outer skin is partially green when sold in food markets, and turns yellow when it ripens. As it ripens the starches turn to sugar making a sweeter fruit.',
        'currentPrice': 0.59,
        'sale' : true,
        'salePrice': 0.44,
        'tags': ['bulk', 'tropical', 'bananas']
        },
        { 'name': 'Organic Bananas',
        'upc': 94011,
        'bulk': true,
        'picture': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Cavendish_Banana_DS.jpg/220px-Cavendish_Banana_DS.jpg',
                'description': 'The fruits of the Cavendish bananas are eaten raw, used in baking, fruit salads, fruit compotes, and to complement foods. The outer skin is partially green when sold in food markets, and turns yellow when it ripens. As it ripens the starches turn to sugar making a sweeter fruit.',
        'currentPrice': 0.69,
        'sale' : false,
        'salePrice': 0.69,
        'tags': ['bulk', 'tropical', 'bananas']
        },
        { 'name': 'Bi-Color Grapes',
        'upc': 40221211345,
        'bulk': false,
        'picture': 'https://az836796.vo.msecnd.net/media/image/product/en/small/0080199400074.jpg',
        'description': 'the grapes of a rainbow!!',
        'currentPrice': 5.99,
        'sale' : true,
        'salePrice': 3.49,
        'tags': ['grapes', 'sale']
        }
        
        ]*/
});
