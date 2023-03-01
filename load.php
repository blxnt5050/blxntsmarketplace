<?php 

include_once 'connect.php';

$name = $_POST['name'];
$username = $_POST['username'];
$email = $_POST['email'];
$address = $_POST['address'];
$password = $_POST['password'];

$sql_signin = " INSERT INTO signin (name, username, email, address, password)
                values ('$name','$username','$email','$address','$password');";

$signin = mysqli_query($connector, $sql_signin);

mysqli_close($connector);

?>