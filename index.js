// Code your solution in this file!
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

let returnFirstTwoDrivers = function(arr) {
  return arr.slice(0, 2);
}

let returnLastTwoDrivers = function(arr) {
  return arr.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

let createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  }
}

let fareDoubler = createFareMultiplier(2);

let fareTripler = createFareMultiplier(3);

let selectDifferentDrivers = function(arrayOfDrivers, func) {
  return func(arrayOfDrivers);
}
