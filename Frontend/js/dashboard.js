// TEMP role (later this will come from JWT)
const role = localStorage.getItem("role");

const welcomeText = document.getElementById("welcomeText");

// If no role is set, redirect silently to login
if (!role) {
    window.location.href = "login.html"; // no alert here
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
const boxIdMap = {
    student: "studentBox",
    teacher: "teacherBox",
    headteacher: "headteacherBox",
    admin: "adminBox"
};

if (boxIdMap[role]) {
    document.getElementById(boxIdMap[role]).style.display = "block";
}

// Logout function
function logout() {
    localStorage.clear();
    window.location.href = "login.html"; // no alert
}

// Helper function to capitalize first letter
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
