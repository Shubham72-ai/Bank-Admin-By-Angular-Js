//@ts-nocheck

footerController.$inject = ["$scope"];

angular.module("bankAdmin").component("fooCom", {
  templateUrl: "./footer-component/footer.component.html",
  controller: footerController,
  controllerAs: "footerController",
});

function footerController($scope) {}
