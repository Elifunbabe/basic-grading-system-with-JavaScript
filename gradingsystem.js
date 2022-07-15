function calculatescore() {
    var examscore = document.getElementById("examsbutton").value;
    var cascore = document.getElementById("casbutton").value;
    var totalscore = parseInt(examscore) + parseInt(cascore);
    document.getElementById("totalsbutton").value = totalscore;
    var totalscoreconvert = parseInt(totalscore);
    if (totalscoreconvert < 40) {
        document.getElementById("statusbutton").value = "Fail";
        document.getElementById("gradebutton").value = "F";
    } else if (totalscoreconvert > 39 && totalscoreconvert < 46) {
        document.getElementById("statusbutton").value = "Pass";
        document.getElementById("gradebutton").value = "E";
    } else if (totalscoreconvert > 45 && totalscoreconvert < 50) {
        document.getElementById("statusbutton").value = "Pass";
        document.getElementById("gradebutton").value = "D";
    } else if (totalscoreconvert > 49 && totalscoreconvert < 60) {
        document.getElementById("statusbutton").value = "Pass";
        document.getElementById("gradebutton").value = "C";
    } else if (totalscoreconvert > 59 && totalscoreconvert < 70) {
        document.getElementById("statusbutton").value = "Pass";
        document.getElementById("gradebutton").value = "B";
    } else if (totalscoreconvert > 69 && totalscoreconvert <= 100) {
        document.getElementById("statusbutton").value = "Pass";
        document.getElementById("gradebutton").value = "A";
    } else {
        alert("your total score cannot be greater than 100,enter a valid score");
        document.getElementById("examsbutton").value = "";
        document.getElementById("casbutton").value = "";
        document.getElementById("totalsbutton").value = "";
        document.getElementById("gradebutton").value = "";
        document.getElementById("statusbutton").value = "";
    }
}