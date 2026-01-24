// TEMP role (later this will come from JWT)
const role = localStorage.getItem("role");
const welcomeText = document.getElementById("welcomeText");

// If no role is set, redirect silently to login
if (!role) {
    window.location.href = "login.html"; // no alert
}

// Update welcome message safely
welcomeText.innerText = "Welcome, " + capitalize(role);

// Show only the role card
const boxIdMap = {
    student: "studentBox",
    teacher: "teacherBox",
    headteacher: "headteacherBox",
    admin: "adminBox"
};

const boxId = boxIdMap[role];
if (boxId) {
    document.getElementById(boxId).style.display = "block";
}

// Logout function
function logout() {
    localStorage.clear();
    window.location.href = "login.html"; // silent redirect
}

// Capitalize first letter
function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}
