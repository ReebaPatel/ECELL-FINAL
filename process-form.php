<?php
session_start(); // Start session to store success flag

$servername = "localhost";
$username = "root"; // default username
$password = ""; // default password
$dbname = "college-db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $sql = "INSERT INTO sipregistration (name, email, subject, message) VALUES ('$name', '$email', '$subject', '$message')";

    if ($conn->query($sql) === TRUE) {
        // Set success flag in session
        $_SESSION['success_message'] = "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();

    // Redirect back to form page
    header("Location: sip.html");
    exit();
}
?>
