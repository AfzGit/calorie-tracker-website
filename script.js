// dynamic list
let counter = 1;
let totalCals = 0;

function additem() {
    var completelist = document.getElementById("thelist");

    let consumables = document.getElementById("item").value;
    let itemCals = document.getElementById("cals").value;

    completelist.innerHTML += "<li>" + consumables +": " + itemCals + " Calories </li>";

    counter++;
    totalCals += parseInt(itemCals);
}

function calCheck() {
    const meta = document.getElementById('metabolism').value;
    let about = document.getElementById("about");

    const net = totalCals - parseInt(meta)
    let calStatus = "None";

    if (net > 0) {
        calStatus = "You are not calorie deficit";
    } else if (net < 0) {
        calStatus = "You are calorie deficit!";
    } else {
        calStatus = "calorie and metabolism are balanced";
    }


    about.innerHTML =  "Total Calories: " + totalCals + " Calories<br>Metabolism: " + meta + " Calories.<br><br>Net Calories: " + net + " Calories<br><br>" + calStatus;
}


