

var myApp = angular
				.module("myModule", [])
				.controller("myController", function($scope){
					$scope.employees = [
					{name: "John",dateOfBirth: new Date("November 23, 1980"), gender:"Male", Salary: 55000.788},
					{name: "Sara",dateOfBirth: new Date("June 23, 1985"), gender:"Female", Salary: 45000.254},
					{name: "Emily",dateOfBirth: new Date("April 15, 1982"), gender:"Female", Salary: 48000.52},
					{name: "Ryan",dateOfBirth: new Date("January 26, 1984"), gender:"Female", Salary: 49000.88},

	];
					$scope.rowLimit = 3;
					$scope.sortColumn = "name";
				});
