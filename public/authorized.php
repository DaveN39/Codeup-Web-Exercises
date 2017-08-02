<?php
session_start();
	function pageController() {

		if(!isset($_SESSION['logged_in_user']) ){
			header("Location: /login.php");
			die();
		}
		$username = isset($_SESSION['logged_in_user']);
	}
	extract(pageController());

?>

<!DOCTYPE html>
<html>
<head>
	<title>Authorized page</title>
	<link rel="stylesheet" type="text/css">
</head>
<body>

	<div class="header">
		<a href="/">Your App Name</a>
	</div>

	<h1>Authorized!</h1>
	<h2>Welcome guest!</h2>
	<span>or <a href="login.php">register here</a></span>

	<form action="login.php" method="POST">
		
		<input type="text" placeholder="Enter your email" name="email">
		<input type="password" placeholder="and password" name="password">

		<input type="submit">

	</form>

</body>
</html>