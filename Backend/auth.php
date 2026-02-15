<?php
require "config.php";
header("Content-Type: application/json");




echo json_encode([
    "status" => "authorized",
    "name" => $_SESSION['name'],
    "role" => $_SESSION['role']
]);
?>
