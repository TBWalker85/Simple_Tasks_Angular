var controllers = angular.module('myApp.controllers', []);
controllers.controller('MainController', ['$scope', function($scope) {
    // 1
    $scope.alert = function(){
        alert("Welcome!");
    }
    // 2
    $scope.createalert = '';
    $scope.alertMessage = function() {
        alert($scope.createAlert);
        $scope.createAlert = '';
    }
    // 3
    $scope.changeColor = function() {
        var box = document.getElementById('coloredBox');
        box.style.backgroundColor = "blue";
    }
    
    $scope.origColor = function() {
        var box = document.getElementById('coloredBox');
        box.style.backgroundColor = "green";
    }
    // 4
    $scope.randomColor = function() {
        var text = document.getElementById('coloredP');
        text.style.color = getRandomColor();
    }
    // 5
    $scope.addName = function() {
        var name = document.getElementById('name');
        name.innerHTML = "<span>Thomas Walker</span>";
    }
    // 6
    $scope.addFriends = function(){
        $scope.addFriends = function(){
            $scope.friends = ['Brian', 'Lamonte', 'Chase', 'Tom', 'David', 'Hillary', 'Tyler', 'Will', 'Patrick', 'John'];
        }
    }
}]);

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}