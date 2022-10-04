// one kg = 7000 cals
const kgcal = 7000;
// for list item 
let totalCals = 0;
// global variable days to calculate days
let days = 0;

// when + button is pressed
function additem() {
    let about = document.getElementById("about");
    var completelist = document.getElementById("thelist");

    let consumables = document.getElementById("item").value;
    let itemCals = document.getElementById("cals").value;

    completelist.innerHTML += "<li>" + consumables +": " + itemCals + " Calories </li>";
    about.innerHTML = "Calculate your net calories here";

    totalCals += parseInt(itemCals);
}

// Calorie calculations when caclulate button is pressed
function calCheck() {
    const meta = document.getElementById('metabolism').value;
    let about = document.getElementById("about");

    var net = parseInt(totalCals) - parseInt(meta)
    let calStatus = "None";

    if (net > 0) {
        calStatus = "You are not calorie deficit...";
        days = kgcal / net;
    } else if (net < 0) {
        calStatus = "You are calorie deficit!";
        days = -(kgcal / net);
    } else if (net == 0) {
        calStatus = "calorie and metabolism are balanced";
    } else {
        alert("Only numbers allowed in Metabolism and Calories fields");
        net = "error";
        console.log(net, totalCals);
    }

    if (net != "error") {
        about.innerHTML =  "Total Calories: " + totalCals + " Calories<br>Metabolism: " + meta + " Calories.<br><br>Net Calories: <ins><strong>" + net + "</strong></ins> Calories<br><br><strong>" + calStatus + "</strong>";
        if (net < 0) {
            about.innerHTML += "<br><br>You will lose 1 kg in <ins><strong>" + Math.round(days) + "</strong></ins> days if you keep this diet up.";
        } else if (net > 0) {
            about.innerHTML += "<br><br>You will gain 1 kg in <ins><strong>" + Math.round(days) + "</strong></ins> days if you keep this diet up.";
        } else {
            about.innerHTML += "<br><br>You will not lose weight in the coming days";
        }
    } else {
        about.innerHTML = "Please enter all the fields properly."
    }

    net = 0;
}

// when reset button is pressed
function resetlist() {
    let about = document.getElementById("about");
    let completelist = document.getElementById("thelist");

    completelist.innerHTML = "";
    about.innerHTML = "Calculate your net calories here";

    totalCals = 0;
}
