<?php
require "config.php";

$data = json_decode(file_get_contents("php://input"), true);

$email = $data['email'];
$password = $data['password'];
$role = $data['role'];

$sql = "SELECT * FROM users WHERE email=? AND role=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $email, $role);
$stmt->execute();
$result = $stmt->get_result();

if ($user = $result->fetch_assoc()) {

    if (password_verify($password, $user['password'])) {

        $_SESSION['user_id'] = $user['id'];
        $_SESSION['role'] = $user['role'];
        $_SESSION['name'] = $user['name'];

        echo json_encode([
            "status" => "success",
            "role" => $user['role']
        ]);
    } else {
        echo json_encode(["status" => "wrong_password"]);
    }

} else {
    echo json_encode(["status" => "not_found"]);
}
