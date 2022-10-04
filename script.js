function calCheck() {
    const cals = document.getElementById('total-cal').value;
    const meta = document.getElementById('metabolism').value;
    const sum = parseInt(cals) - parseInt(meta)
    var calStatus = "None";

    if (sum > 0) {
        calStatus = "You are not calorie deficit";
    } else if (sum < 0) {
        calStatus = "You are calorie deficit!";
    } else {
        calStatus = "calorie and metabolism are balanced";
    }
    alert(calStatus + "... Net calories = " + sum + "" );
}

