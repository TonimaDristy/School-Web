document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    // Check role selected
    if (!role) {
        document.getElementById("loginMsg").innerText = "Please select a role";
        return;
    }

    // Save role temporarily (later JWT will replace this)
    localStorage.setItem("role", role);

    // Temporary success message
    alert("Logged in as " + role);

    // Redirect to dashboard
    window.location.href = "dashboard.html";
});
