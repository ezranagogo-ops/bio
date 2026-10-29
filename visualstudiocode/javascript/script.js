function hiVisitors() {
    alert("you are opening the bio");
}

var correctUsername = "admin";
var correctPassword = "admin";

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === correctUsername && password === correctPassword) {
        window.location.href = "index.html";
    } else {
        alert("username or password is incorrect");
        window.location.href = "twitter.html";
    }
});