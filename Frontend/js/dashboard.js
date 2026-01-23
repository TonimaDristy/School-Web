// TEMP role (later this will come from JWT)
const role = localStorage.getItem("role");

const welcomeText = document.getElementById("welcomeText");

if (!role) {
    window.location.href = "login.html";
}

welcomeText.innerText = "Welcome, " + role;

// Show dashboard based on role
if (role === "student") {
    document.getElementById("studentBox").style.display = "block";
}

if (role === "teacher") {
    document.getElementById("teacherBox").style.display = "block";
}

if (role === "headteacher") {
    document.getElementById("headteacherBox").style.display = "block";
}

if (role === "admin") {
    document.getElementById("adminBox").style.display = "block";
}

// Logout
function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}