// @ts-nocheck
sliderContoller.$inject = ["$scope", "$location"];
function sliderContoller($scope, $location) {}

angular.module("bankAdmin").component("slideCom", {
  controller: sliderContoller,
  controllerAs: "sliderContoller",
  templateUrl: "slider_component/slider.component.html",
});
