<!doctype html><!--HTML5 doctype declaration -->
<html lang="en"><!--default language of the document content -->

<?php

require_once('connection.php');

$page = basename($_SERVER['PHP_SELF']);

?>
	
    <head>
		<meta charset="utf-8"><!--character encoding for the document (Unicode) -->
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
		<title>Security Website</title><!--web page title -->
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link href="http://fonts.googleapis.com/css?family=Strait" rel="stylesheet">
		<link href= "../css/normalize.css" rel="stylesheet">
		<link href= "../css/stylesheet.css" rel="stylesheet">
		
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@0.15.3/dist/tf.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.sound.min.js"></script>
	</head>
	
<body>
<!--Markup all web page content inside the 'body' tags -->
	<div id="wrapper">
	<!--The 'wrapper' contains all the page content-->
	
    <nav class="menu"><!--The primary navigation for the page -->
	<ul>
		<li><a href="../index.php">Home Page</a></li>
		<li><a href="../password.php">Password Checker</a></li>
        <li><a href="../game.php">Security Game</a></li>
	</ul>
	</nav>
	
