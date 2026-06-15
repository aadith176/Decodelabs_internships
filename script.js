
// LOGIN FUNCTION (BACKEND VERSION)
function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(res => res.json())
    .then(data => {

        if (data.status === "success") {

            localStorage.setItem("role", data.role);
            localStorage.setItem("user", data.username);

            window.location.href = "dashboard.html";
        }
        else {
            document.getElementById("msg").innerText = data.message;
        }
    })
    .catch(err => {
        console.log(err);
        document.getElementById("msg").innerText = "Server not running!";
    });
}


// DASHBOARD LOAD
window.onload = function () {

    let role = localStorage.getItem("role");
    let user = localStorage.getItem("user");

    if (!role || !user) {
        if (window.location.pathname.includes("dashboard")) {
            window.location.href = "index.html";
        }
        return;
    }

    let welcome = document.getElementById("welcome");

    if (welcome) {
        welcome.innerText = "Welcome " + user + " (" + role.toUpperCase() + ")";
    }

    let cards = document.querySelectorAll(".card");

    if (role === "teacher") {
        cards.forEach(card => {
            card.contentEditable = true;
            card.style.border = "2px solid green";
        });
    } else {
        cards.forEach(card => {
            card.contentEditable = false;
        });
    }
};


// LOGOUT
function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}