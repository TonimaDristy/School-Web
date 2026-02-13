<?php
require "config.php";

if (!isset($_SESSION['user_id'])) {
    echo json_encode(["status" => "unauthorized"]);
    exit();
}

echo json_encode([
    "status" => "authorized",
    "name" => $_SESSION['name'],
    "role" => $_SESSION['role']
]);
?>
