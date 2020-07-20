//@ts-nocheck
topNavController.$inject = ["$scope", "$location"];

angular.module("bankAdmin").component("topNav", {
  controller: topNavController,
  controllerAs: "topNavController",
  templateUrl: "./top-nav-component/top-nav.component.html",
});

function topNavController($scope, $location) {}
