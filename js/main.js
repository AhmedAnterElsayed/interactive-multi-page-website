function greetUser() {
    let name = prompt("Enter your name:");
    if (name) {
        alert("Hello, " + name + "! Welcome to my website.");
    }
}

function saveUser(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const user = {
        name: name,
        email: email
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    alert("User saved successfully!");
    event.target.reset();
}
