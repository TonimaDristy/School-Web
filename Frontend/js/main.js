document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    if (!role) {
        document.getElementById("loginMsg").innerText = "Please select a role";
        return;
    }

    try {
        const response = await axios.post(
            "http://localhost/school-web/backend/login.php",
            {
                email: email,
                password: password,
                role: role
            }
        );

        if (response.data.status === "success") {
            window.location.href = "dashboard.html";
        } else if (response.data.status === "wrong_password") {
            document.getElementById("loginMsg").innerText = "Wrong password";
        } else {
            document.getElementById("loginMsg").innerText = "User not found";
        }

    } catch (error) {
        document.getElementById("loginMsg").innerText = "Server error";
    }
});
