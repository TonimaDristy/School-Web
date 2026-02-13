<?php
require "config.php";

$name = $_POST['name'];
$session = $_POST['session'];
$age = $_POST['age'];
$phone = $_POST['phone'];
$course = $_POST['course'];
$message = $_POST['message'];

$sql = "INSERT INTO applications (name, session, age, phone, course, message)
        VALUES (?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssisss", $name, $session, $age, $phone, $course, $message);

if ($stmt->execute()) {
    echo "<script>alert('Application submitted successfully'); window.location.href='../frontend/index.html';</script>";
} else {
    echo "Error submitting application";
}
?>
