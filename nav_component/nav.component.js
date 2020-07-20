// @ts-nocheck

navContorller.$inject = ["$scope", "$location"];
function navContorller($scope, $location) {
  $scope.click = function () {
    console.log($scope.name);
  };
}

angular.module("bankAdmin").component("mainNav", {
  controller: navContorller,
  controllerAs: "navContorller",
  templateUrl: "./nav_component/nav.component.html",
});
