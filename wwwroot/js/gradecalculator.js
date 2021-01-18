var submit = document.getElementById("submit-button")

submit.addEventListener("click", function () {
    alert('Your grade would be '
        + ((
            ((parseInt(document.getElementById('assignments').value) / 1000) * .5)
            + ((parseInt(document.getElementById('group-projects').value) / 200) * .1)
            + ((parseInt(document.getElementById('quizzes').value) / 200) * .1)
            + ((parseInt(document.getElementById('exams').value) / 400) * .2)
            + ((parseInt(document.getElementById('intex').value) / 200) * .1)
        ) * 100)
        + '%.'
    );
});