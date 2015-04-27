/**
 * Created by andre on 4/27/15.
 */
angular.module('myApp', [])
    .controller('myCtrl', function($scope){
       $scope.fullName = function(){
           $scope.firstName = 'Soneca';
           $scope.lastName = 'Rocha';
           return $scope.firstName + " " +$scope.lastName;
       }
    })
    .controller('namesCtrl', function($scope){
        $scope.names = [
            {name : 'lllll', country : 'brazil'},
            {name : 'zzzzz', country : 'us'}
        ];
    })
    .controller('personCtrl', function($scope){
        $scope.lastName = 'Rocha';
        $scope.firstName = 'Andre';
    })
;
