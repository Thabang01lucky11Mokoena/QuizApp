var app = angular.module('quizApp', []);

app.directive('quiz', function(){
    return {
        restrict: 'AE',
        scope: {},
        templateUrl: 'HomePage',
        link: function(scope, elem, attrs) {
            scope.start = function(){
                scope.id = 0;
                scope.quizOver = false;
                scope.inProgress = true;
                scope.getQuestion();
            };
            scope.getQuestion = function(){
                var j = quizFactory.getQuestion(scope.id);
                if (j) {
                    scope.question = j.question;
                    scope.options = j.options;
                    scope.answer = j.answer;
                    scope.answerMode = true;
                } else {
                    scope.quizOver= true;
                }
            };
            scope.checkQuestion = function(){
                if (!$('input[name=answer]:checked').length) return;
                var ans = $('input[name=answer]:checked').val();

                if(ans == scope.options[scope.answer]){
                   scope.scope++;
                   scope.correctAns = true; 
                } else {
                    scope.correctAns = false;
                }
                scope.answerMode = false;
            };
            scope.nextQuestion = function(){
                scope.id++;
                scope.getQuestion();
            }
            scope.reset ();
        }
    }
});
app.factory('quizFactory', function() {
	var questions = [
		{
			question: "Which is the largest country in the world by population?",
			options: ["India", "USA", "China", "Russia"],
			answer: 2
		},
		{
			question: "When did the second world war end?",
			options: ["1945", "1939", "1944", "1942"],
			answer: 0
		},
		{
			question: "Which was the first country to issue paper currency?",
			options: ["USA", "France", "Italy", "China"],
			answer: 3
		},
		{
			question: "Which city hosted the 1996 Summer Olympics?",
			options: ["Atlanta", "Sydney", "Athens", "Beijing"],
			answer: 0
		},
		{	
			question: "Who invented telephone?",
			options: ["Albert Einstein", "Alexander Graham Bell", "Isaac Newton", "Marie Curie"],
			answer: 1
		}
	];
 
	return {
		getQuestion: function(id) {
			if(id < questions.length) {
				return questions[id];
			} else {
				return false;
			}
		}
	};
});