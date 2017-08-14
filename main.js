// START THE TEST - PAGE DISSAPEAR
$('#start_test').append($('<button/>').text('Start The Test').click(function () {$('#start_test').slideUp(1500);} ));

// THE QUIZ
var pos = 0;
var test;
var test_status;
var question;
var choice;
var chA;
var chB;
var chC;
var correct = 0;
var questions = [
	['What is 2 + 2?' , '4' , '5' , '6' , 'A'],
	['What is 2 - 2?' , '4' , '1' , '0' , 'C'],
	['What is 2 x 2?' , '4' , '2' , '1' , 'A'],
	['What is 2 / 2?' , '2' , '4' , '1' , 'C'],
	['What is 2 + 2 x 2?' , '8' , '6' , '4' , 'B'],
	['What is 2 / 2 x 2?' , '3' , '4' , '2' , 'C'],
	['What is 2 - 2 + 2?' , '4' , '0' , '2' , 'C'],
	['What is 2 x 2 x 2?' , '12' , '4' , '8' , 'C'],
	['What is 2 + 2 / 2?' , '1' , '3' , '2' , 'B'],
	['What is 2 x 2 / 2?' , '6' , '2' , '4' , 'B']
];

function _(x) {
	return document.getElementById(x);
}

function renderQuestion() {
	test = _('test');
	if (pos >= questions.length) {
		test.innerHTML = '<h2>You got ' + correct + ' of ' + questions.length + ' questions correct</h2>';
		if (correct < 6) {
			test.innerHTML += '<em>"You should work on your math skills"</em>' + '<br><br>';
		} else if (correct < 10) {
			test.innerHTML += '<em>"You are doing ok with your math"</em>' + '<br><br>';
		} else {
			test.innerHTML += '<em>Congrats! Your math is awesome!</em>' + '<br><br>';
		}

		test.innerHTML += '<button id="retry">' + 'Retake the test' + '</button>';
		document.getElementById('retry').addEventListener('click', function() {window.location.reload();} );
		_('test_status').innerHTML = 'Test Completed!';
		pos = 0;
		correct = 0;
		return false;
	}

	_('test_status').innerHTML = 'Question ' + (pos + 1) + ' of ' + questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	test.innerHTML = '<h3>' + question + '</h3>';
	test.innerHTML += '<input type="radio" name="choices" value="A"> ' + chA + '<br>';
	test.innerHTML += '<input type="radio" name="choices" value="B"> ' + chB + '<br>';
	test.innerHTML += '<input type="radio" name="choices" value="C"> ' + chC + '<br><br>';
	test.innerHTML += '<button onclick="checkAnswer()" id="submit_answer">Submit Answer</button>';

}

function checkAnswer() {
	choices = document.getElementsByName('choices');
	for (var i = 0; i < choices.length; i++) {
		if (choices[i].checked) {
			choice = choices[i].value;
		}
	}
	if (choice == questions[pos][4]) {
		correct++;
	}
	pos++;
	renderQuestion();
}

window.addEventListener('load', renderQuestion, false);


