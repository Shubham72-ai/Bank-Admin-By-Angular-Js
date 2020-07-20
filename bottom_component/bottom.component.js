//@ts-nocheck
BottomController.$inject = ["$scope", "$location"];

function BottomController($scope, $location) {
  $scope.showTab1_flag = "on";
  $scope.showTab2_flag = "off";
  $scope.showTab = function () {
    if ($scope.showTab1_flag == "on") {
      // console.log("tab2 opens");
      $scope.showTab2 = {
        opacity: 1,
        display: "block",
      };
      // console.log("tab1 hided");
      $scope.showTab1 = {
        opacity: 0,
        display: "none",
      };
      $scope.showTab1_flag = "off";
      $scope.showTab2_flag = "on";
    } else {
      // console.log("tab1 opens");
      // console.log("tab2 hided");
      $scope.showTab2 = {
        opacity: 0,
        display: "none",
      };
      // console.log("tab1 hided");
      $scope.showTab1 = {
        opacity: 1,
        display: "block",
      };
      $scope.showTab1_flag = "on";
      $scope.showTab2_flag = "off";
    }
  };
}

angular.module("bankAdmin").component("botCom", {
  controller: BottomController,
  controllerAs: "BottomController",
  templateUrl: "./bottom_component/bottom.component.html",
});
