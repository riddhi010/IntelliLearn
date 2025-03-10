<?php
// Include the database connection file
include 'db_connect.php';  // Make sure you have a db_connect.php file with the correct connection setup

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capture form data
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirmPassword'];

    // Validate that passwords match
    if ($password !== $confirmPassword) {
        echo "Passwords do not match!";
        exit();
    }

    // Hash the password before storing in the database
    $passwordHash = password_hash($password, PASSWORD_BCRYPT);

    // Check if the email is already registered
    $stmt = $conn->prepare("SELECT * FROM Users WHERE Email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo "Email is already registered!";
        exit();
    }

    // Insert new user into the database
    $stmt = $conn->prepare("INSERT INTO Users (FullName, Email, PasswordHash) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $fullName, $email, $passwordHash);

    if ($stmt->execute()) {
        // On success, redirect to login page
        header("Location: login.html");
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
