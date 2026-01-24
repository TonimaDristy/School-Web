// TEMP role (later this will come from JWT)
const role = localStorage.getItem("role");

const welcomeText = document.getElementById("welcomeText");

// If no role is set, redirect to login
if (!role) {
    window.location.href = "login.html";
}

// Update welcome message
welcomeText.innerText = "Welcome, " + capitalize(role);

// Hide all role boxes initially
const roles = ["studentBox", "teacherBox", "headteacherBox", "adminBox"];
roles.forEach(id => {
    const box = document.getElementById(id);
    if (box) box.style.display = "none";
});

// Show only the box for the logged-in role
switch (role) {
    case "student":
        document.getElementById("studentBox").style.display = "block";
        break;
    case "teacher":
        document.getElementById("teacherBox").style.display = "block";
        break;
    case "headteacher":
        document.getElementById("headteacherBox").style.display = "block";
        break;
    case "admin":
        document.getElementById("adminBox").style.display = "block";
        break;
}

// Logout function
function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}

// Helper function to capitalize first letter
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
