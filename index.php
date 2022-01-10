<?php

require_once('includes/header.php');

?>
	    


	<nav id='sidenav'>
		<h3>Post Navigation</h3>
		
		<ol>
		
<?php
	$sql = "SELECT * FROM facts";
	foreach( $conn->query($sql) as $row) {

	$id = $row['id'];
	$title = $row['title'];
	$shortdesc = $row['shortdesc'];

?>
		
			<li><a href="#<?php echo $id; ?>"><?php echo $title; ?></a></li>
			
<?php 
	} 
?>
		</ol>
	</nav>
	

	<a id='top'></a>
	
    <main>
        
        	<h2>Facts</h2>
	
<?php
	$sql = "SELECT * FROM facts";
	foreach( $conn->query($sql) as $row) {

	$id = $row['id'];
	$title = $row['title'];
	$shortdesc = $row['shortdesc'];
	$img = $row['img'];

?>

	<article>
		<a id='<?php echo $id; ?>'></a>
		
		<a style="text-decoration:none;color:black;" href="fact.php?gid=<?php echo $id; ?>">
			<h3 class='post'><?php echo $title; ?></h3>
		</a>
		
		<div id="fixheight">
			<?php echo "<img src='" . $img . "' class='postpic' alt='error'>";?>
			<h3 class='olpost'><?php echo $shortdesc; ?></h3>
		</div>
		
		<p><a href='#top'>Go to top</a></p>
	</article>
	
<?php 
	} 
?>
		
    </main>

	</div><!--Close 'wrapper' div -->
</body><!--Close 'body' -->
</html><!--Close 'html' -->