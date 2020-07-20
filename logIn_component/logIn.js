// @ts-nocheck
LogInController.$inject = ["$scope", "$location"];

function LogInController($scope, $location) {
  $scope.check = true;
  $scope.checkCrident = function () {
    if ($scope.adname.length > 0 && $scope.adpass.length > 0) {
      $scope.check = false;
    } else {
      $scope.check = true;
    }
  };
}

angular.module("bankAdmin").component("loginComp", {
  controller: LogInController,
  controllerAs: "LogInController",
  templateUrl: "./login_component/login.html",
});
