//listens for a submission in the form 
//alerts the user what their percentage grade would be in the class
$("#submit-button").click(function () {
    alert('Your grade would be '
        + ((
            (parseFloat($('#assignments').val()) * .5)
            + (parseFloat($('#group-projects').val()) * .1)
            + (parseFloat($('#quizzes').val()) * .1)
            + (parseFloat($('#exams').val()) * .2)
            + (parseFloat($('#intex').val()) * .1)
        ) * 100)
        + '%.'
    );
});

