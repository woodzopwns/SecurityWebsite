<?php

require_once('includes/header.php');

?>

	<nav id='sidenav'>
		<h3>Post Navigation</h3>
		
		<ol>

	<?php

				$sql = "SELECT * FROM facts";
				foreach( $conn->query($sql) as $row) {

				$id =$row['id'];
				$title =$row['title'];
				$firstpara =$row['firstpara'];
				$secondpara = $row['secondpara'];
				$secondimg = $row['secondimg'];

?>
	
	<li><a href="fact.php?gid=<?php echo $id; ?>"><?php echo $title; ?></a></li>
	
	<?php
				}
				
		
	?>
		</ol>
		
			<?php

				$id = $_GET['gid'];
				$num = 1;
				
				$sql = "SELECT * FROM facts WHERE id = $id";
				foreach( $conn->query($sql) as $row) {

				$title =$row['title'];

			?>
			
				<div id="funfact">
					<script src='scripts/<?php echo $title; ?>.js'></script>
				</div>
				
			<?php
				}
			?>
		
	</nav>

	<main>
		<article class="factarticle">
		<?php

				$id = $_GET['gid'];
				$num = 1;

				$sql = "SELECT * FROM facts WHERE id = $id";
				foreach( $conn->query($sql) as $row) {

				$title =$row['title'];
				$firstpara =$row['firstpara'];
				$secondpara = $row['secondpara'];
				$secondimg = $row['secondimg'];

?>
	
	<h2 class="facttitle"><?php echo $title; ?></h2>
	<p><?php echo $firstpara; ?></p>
	
	<div class="fixheight">
		<?php echo "<img src='" . $secondimg . "' class='factpic' alt='error'>";?>
	</div>
	
	<p><?php echo $secondpara; ?></p>
	
	<?php
				}
	?>
		</article>
	</main>
</body>

</html>
