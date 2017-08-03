<?php
require_once "functions.php";

session_start();

	function pageController() 
	{
		$data = [];

		if(isset($_SESSION['logged_in_user'])) {
			header("Location: /authorized.php");
			die();
		}
		$message = "message";
		$username = (isset($_POST['username'])) ? $_POST['username'] : '';
		$password = (isset($_POST['password'])) ? $_POST['password'] : '';

		if(!empty($_POST)) {
			if($username == 'guest' && $password == 'password') {
				$_SESSION['logged_in_user'] = $username;
				header('Location: /authorized.php');
				die();
			} else {
				$message = 'Invalid login!';
			}
		}
		$data = [
			"username" => $username,
			"message" => $message,
		];
		return $data;
	}
	extract(pageController());
?>
<!DOCTYPE html>
<html>
<head>
    <title>Login Example</title>
</head>
<body>
	<main class="container">
    <h1>Login to your Secure Site!</h1>
    <p><?= $message ?></p>
    <form method="POST">
    	<div class="form-group">
    		<label for="username">Username</label>
    		<input type="text" name="username" class="form-control" id="username" placeholder="Username">
    	</div>
    	<div class="form-group">
    		<label for="password">Password</label>
    		<input type="password" name="password" class="form-control" id="password" placeholder="Password">
    	</div>   		
    	<button type="submit" class="btn btn-default">Login</button>
    </form>
   </main>
    
</body>
</html>