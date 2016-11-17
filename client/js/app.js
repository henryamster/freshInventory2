var freshInventory = angular.module('freshInventory', []);
freshInventory.controller("itemList", function ($scope){
    $scope.items = [
        { 'name': 'Bananas',
        'upc': 4011,
        'bulk': true,
        'picture': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Cavendish_Banana_DS.jpg/220px-Cavendish_Banana_DS.jpg',
        'description': 'Cavendish bananas accounted for 47% of global banana production between 1998 and 2000, and the vast majority of bananas entering international trade. The fruits of the Cavendish bananas are eaten raw, used in baking, fruit salads, fruit compotes, and to complement foods. The outer skin is partially green when sold in food markets, and turns yellow when it ripens. As it ripens the starches turn to sugar making a sweeter fruit. When it reaches its final stage (stage 7), brown/black "sugar spots" develop. When overripe, the skin turns black and the flesh becomes mushy. Bananas ripen naturally until they are picked. Once picked they no longer turn yellow on their own, and need to be gassed with ethylene gas to start up ripening again. Most retailers sell bananas in stages 3–6, with stage 4 being the most ideal.',
        'currentPrice': 0.59,
        'sale' : true,
        'salePrice': 0.44,
        'tags': ['bulk', 'tropical', 'bananas']
        },
        { 'name': 'Organic Bananas',
        'upc': 94011,
        'bulk': true,
        'picture': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Cavendish_Banana_DS.jpg/220px-Cavendish_Banana_DS.jpg',
        'description': 'Cavendish bananas accounted for 47% of global banana production between 1998 and 2000, and the vast majority of bananas entering international trade. The fruits of the Cavendish bananas are eaten raw, used in baking, fruit salads, fruit compotes, and to complement foods. The outer skin is partially green when sold in food markets, and turns yellow when it ripens. As it ripens the starches turn to sugar making a sweeter fruit. When it reaches its final stage (stage 7), brown/black "sugar spots" develop. When overripe, the skin turns black and the flesh becomes mushy. Bananas ripen naturally until they are picked. Once picked they no longer turn yellow on their own, and need to be gassed with ethylene gas to start up ripening again. Most retailers sell bananas in stages 3–6, with stage 4 being the most ideal.',
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
        
        ]
});
