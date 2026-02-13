async function checkAuth() {
    try {
        const response = await axios.get(
            "http://localhost/school-web/backend/auth.php"
        );

        if (response.data.status === "unauthorized") {
            window.location.href = "login.html";
        } else {
            document.getElementById("welcomeText").innerText =
                "Welcome, " + response.data.name;

            showRole(response.data.role);
        }

    } catch (error) {
        window.location.href = "login.html";
    }
}

function showRole(role) {
    const roles = ["studentBox", "teacherBox", "headteacherBox", "adminBox"];
    roles.forEach(id => {
        document.getElementById(id).style.display = "none";
    });

    document.getElementById(role + "Box").style.display = "block";
}

checkAuth();
