$(document).ready(function () {
    var correctAnswer = 'symbolism';
    var correctAnswerGiven = false; // Flag to track if the correct answer has been given

    // Update to restrict the length of input to 9 characters
    $('#answer').on('input', function () {
        var input = $(this).val();
        if (input.length > 9) { // If input exceeds 9 characters, truncate it
            $(this).val(input.substring(0, 9));
        }
        var charCount = $(this).val().length;
        $('#char-count').text(charCount + '/9');
    });

    // Function to handle the submission logic
    function handleSubmit() {
        var userAnswer = $('#answer').val().trim().toLowerCase();
        var resultDiv = $('#result');
        resultDiv.hide().removeClass('alert-success alert-danger alert-warning'); // Hide and clean previous styles

        if ($('#answer').val().length !== 9) {
            resultDiv.addClass('alert-warning').text('Please enter exactly 9 characters.').show();
        } else if (userAnswer === correctAnswer) {
            correctAnswerGiven = true; // Set the flag to true when the correct answer is given
            resultDiv.addClass('alert-success').text('Correct!').show();
        } else {
            resultDiv.addClass('alert-danger').text('Try again.').show();
        }
    }

    // Event handler for the submit button
    $('#submit-btn').click(function () {
        handleSubmit();
    });

    // Event handler to detect Enter key in the input field
    $('#answer').keypress(function (event) {
        if (event.which == 13) { // 13 is the Enter key
            event.preventDefault(); // Prevent the default action (form submission)
            handleSubmit();
        }
    });

    // Event handler for the Congratulation button
    $('#congrate-button').click(function (e) {
        if (!correctAnswerGiven) {
            e.preventDefault(); // Prevent the default action
            alert('Please answer correctly before proceeding!'); // Alert the user
        }
    });
});


$(document).ready(function () {
    let correctAnswerGiven = false; // Tracks whether the correct answer has been given

    $('.number').click(function () {
        var isCorrect = $(this).data('correct');
        var feedbackMessage = $('#feedback-message');
        feedbackMessage.removeClass('correct-feedback incorrect-feedback'); // Remove previous classes

        if (isCorrect) {
            correctAnswerGiven = true; // Set to true when the correct answer is given
            feedbackMessage.addClass('correct-feedback').text('Correct!');
            $('#hint-button').hide();
            $('.hint-popup').hide();
            $('#continue-message').show();
        } else {
            correctAnswerGiven = false; // Set to false when an incorrect answer is given
            feedbackMessage.addClass('incorrect-feedback').text('Try again!');
            $('#hint-button').show();
            $('.hint-popup').hide();
        }
    });

    $('#hint-button').click(function () {
        // Toggle hint visibility
        if ($('.hint-popup').is(':hidden')) {
            $('.hint-popup').text('Hint: An ordinary object left aside might just symbolize a step towards a sacred union.');
            $('.hint-popup').show();
        } else {
            $('.hint-popup').hide();
        }
    });

    $('#quiz6button').click(function (e) {
        if (!correctAnswerGiven) {
            e.preventDefault();
            $('#continue-message').hide(); /// Prevent moving to the next quiz if the correct answer hasn't been given
            alert('Please select the correct answer before moving on!'); // Show an alert popup
        }
    });
});


var crosswordCompleted = false; // Global variable to track crossword completion

function checkCrossword() {
    var answers = {
        '1-across-1': 'O',
        '1-across-4': 'N',
        '1-across-5': 'S',
        '2-across-2': 'O',
        '2-across-3': 'G',
        '3-across-1': 'G',
        '3-across-2': 'R',
        '3-across-4': 'E'
    };
    var allCorrect = true;
    var anyEmpty = false;
    Object.keys(answers).forEach(function (id) {
        var input = document.getElementById(id);
        if (!input || input.value === "") {
            anyEmpty = true;
            input.style.backgroundColor = 'yellow';
        } else if (input.value.toUpperCase() !== answers[id]) {
            allCorrect = false;
            input.style.backgroundColor = 'pink';
        } else {
            input.style.backgroundColor = 'lightgreen';
        }
    });

    var resultMessage = document.getElementById('result-message');
    if (anyEmpty) {
        resultMessage.className = 'alert alert-warning';
        resultMessage.textContent = 'Please fill in all the answers before submitting.';
        resultMessage.style.display = 'block';
        crosswordCompleted = false;
    } else if (allCorrect) {
        resultMessage.className = 'alert alert-success';
        resultMessage.textContent = 'Congratulations! All answers are correct.';
        resultMessage.style.display = 'block';
        crosswordCompleted = true;
    } else {
        resultMessage.className = 'alert alert-danger';
        resultMessage.textContent = 'Some answers are incorrect. Please check again.';
        resultMessage.style.display = 'block';
        crosswordCompleted = false;
    }
}

document.getElementById('quiz5button').addEventListener('click', function (event) {
    if (!crosswordCompleted) {
        alert('Please complete the crossword correctly before moving to the next quiz.');
        event.preventDefault(); // Prevent navigation
    }
});



