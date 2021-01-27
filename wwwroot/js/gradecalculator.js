//listens for a submission in the form 
//alerts the user what their grade would be in the class
$("#submit-button").click(function () {
    //determines the percentage grade
    let dGrade =
        (parseFloat($('#assignments').val()) * .5)
        + (parseFloat($('#group-projects').val()) * .1)
        + (parseFloat($('#quizzes').val()) * .1)
        + (parseFloat($('#exams').val()) * .2)
        + (parseFloat($('#intex').val()) * .1)
    
    //determines the letter grade
    let sLetterGrade = ''

    if (dGrade > 60) { sLetterGrade = 'D-' }
    if (dGrade > 63) { sLetterGrade = 'D' }
    if (dGrade > 67) { sLetterGrade = 'D+' }
    if (dGrade > 70) { sLetterGrade = 'C-' }
    if (dGrade > 73) { sLetterGrade = 'C' }
    if (dGrade > 77) { sLetterGrade = 'C+' }
    if (dGrade > 80) { sLetterGrade = 'B-' }
    if (dGrade > 83) { sLetterGrade = 'B' }
    if (dGrade > 87) { sLetterGrade = 'B+' }
    if (dGrade > 90) { sLetterGrade = 'A-' }
    if (dGrade > 93) { sLetterGrade = 'A' }
    else { sLetterGrade ='E' }

    //alerts the user of their grade
    alert(
        'Your grade would be: '
        + sLetterGrade
        + ' (' + dGrade + '%)'
    );
});

