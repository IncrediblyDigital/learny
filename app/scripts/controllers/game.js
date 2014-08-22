/*global _:false */
'use strict';

angular.module('learnyApp')
  .controller('GameCtrl', [function () {
    var self = this;
    self.gameTitle = 'Alphabet Game';
    var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var remainingLetters = _.shuffle(letters.slice(0));
    var answerPool = [];
    var currentLetter = '';

    var numRight = 0;
    var numWrong = 0;
    var numAnswered = 0;
    self.message = 'Select the matching lower case letter';
    self.remainingQuestions = remainingLetters.length;

    var updateProgress = function() {
      self.progress = Math.floor(((letters.length-remainingLetters.length)/letters.length)*100);
      self.rightAnswers = Math.floor((numRight/numAnswered)*100);
      self.wrongAnswers = Math.floor((numWrong/numAnswered)*100);
    };

    var initLetter = function() {
      self.givenAnswers = [];
      currentLetter = remainingLetters.pop();
      self.currentLetter = currentLetter.toUpperCase();
      answerPool = _.without(letters.slice(0), currentLetter);
      self.givenAnswers.push(currentLetter);
      while (self.givenAnswers.length < 4) {
        self.givenAnswers.push(answerPool.pop());
      }
      self.remainingQuestions = remainingLetters.length;
      self.givenAnswers = _.shuffle(self.givenAnswers);
    };

    initLetter();
    updateProgress();

    self.checkAnswer = function(clickedLetter) {
      if (clickedLetter === currentLetter) {
        numRight++;
        self.message = 'You got it right!';
        self.lastCorrect = true;
      } else {
        numWrong++;
        self.message = 'You must not be able to read good...';
        self.lastCorrect = false;
      }
      numAnswered++;
      initLetter();
      updateProgress();
    };
  }]);
