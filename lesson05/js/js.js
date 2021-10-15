// DROP DOWN MENU

document.querySelector("button").addEventListener("click", dropDown);

function dropDown() {
    document.querySelector("#ul").classList.toggle("active");
}

// FOOTER DATE

var d = new Date();
document.querySelector('#date').innerHTML = d.toDateString();