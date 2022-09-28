


<?php
$servername = "localhost";
$database = "fvv";
$username = "root";
$password = "";
// Create connection
$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
 
?>