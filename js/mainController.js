// @ts-nocheck

let app = angular.module("bankAdmin", ["ngRoute", "ngAnimate"]);
app.controller("mainController", function ($scope) {});

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "./logIn.html",
    })
    .when("/main", {
      templateUrl: "./main.html",
    })
    .when("/admin", {
      templateUrl: "./dashboard.html",
    });
});
