

var myApp = angular
				.module("myModule", [])
				.controller("myController", function($scope){
					$scope.technologies = [
					{name: "Python",likes: 0, dislikes:0},
					{name: "Java",likes: 0, dislikes:0},
					{name: "C++",likes: 0, dislikes:0},
					{name: "Django",likes: 0, dislikes:0},
					{name: "Javascript",likes: 0, dislikes:0},
					// {firstName: "Nikhil",lastName: "Bobade"},
					// {firstName: "Sarika",lastName: "Chaudhari"},
					// {firstName: "Jayesh",lastName: "Patil"},
					// {firstName: "Pawan",lastName: "Kasar"}
	];
					$scope.incrementLikes = function(technology){
						technology.likes++;
					}

					$scope.incrementDislikes = function(technology){
						technology.dislikes++;
					}

				});
