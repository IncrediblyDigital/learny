'use strict';

var _ = _;

angular.module('learnyApp')
  .controller('GameCtrl', ['$scope', function ($scope) {
    $scope.gameTitle = 'Alphabet Game';
    var letters = _.shuffle('abcdefghijklmnopqrstuvwxyz'.split(''));
    var remainingLetters = letters.slice(0);
    var answerPool = [];
    var currentLetter = '';

    var numRight = 0;
    var numWrong = 0;
    var numAnswered = 0;
    $scope.message = 'Select the matching lower case letter';

    var updateProgress = function() {
      $scope.progress = Math.floor(((letters.length-remainingLetters.length)/letters.length)*100);
      $scope.rightAnswers = Math.floor((numRight/numAnswered)*100);
      $scope.wrongAnswers = Math.floor((numWrong/numAnswered)*100);
    }

    $scope.remainingQuestions = remainingLetters.length;

    var initLetter = function() {
      $scope.givenAnswers = [];
      currentLetter = remainingLetters.pop();
      $scope.currentLetter = currentLetter.toUpperCase();
      answerPool = _.without(letters.slice(0), currentLetter);
      $scope.givenAnswers.push(currentLetter);
      while ($scope.givenAnswers.length < 4) {
        $scope.givenAnswers.push(answerPool.pop());
      }
      $scope.remainingQuestions = remainingLetters.length;
      $scope.givenAnswers = _.shuffle($scope.givenAnswers);
    };

    initLetter();
    updateProgress();

    $scope.checkAnswer = function(clickedLetter) {
      if (clickedLetter === currentLetter) {
        numRight++;
        $scope.message = 'You got it right!';
        $scope.lastCorrect = true;
      } else {
        numWrong++;
        $scope.message = 'You must not be able to read good...';
        $scope.lastCorrect = false;
      }
      numAnswered++;
      initLetter();
      updateProgress();
    };
  }]);
