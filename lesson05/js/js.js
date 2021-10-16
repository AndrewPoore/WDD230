// DROP DOWN MENU

document.querySelector("button").addEventListener("click", dropDown);

function dropDown() {
    document.querySelector("#ul").classList.toggle("active");
}

// FOOTER DATE

var d = new Date();
document.querySelector('#date').innerHTML = d.toDateString();

// PANCAKES IN THE PARK IF STATEMENT

var dayOfWeek = new Date().getDay();

function pancakes() {
    if (dayOfWeek == 5) {
        let output = "Saturday = Preston pancakes in the park!";
        document.querySelector('#pancakes').innerHTML = output;
    }
}
window.onload = function() {
    pancakes();
}