<head>
	<script id="edit"></script>
</head>
<meta charset="utf-8">

<input type="checkbox" id="menu">

<div id="menu-esquerdo">
	<label id="men" for="menu">Menu</label>
	<?php 
	$p = scandir("txt");
	foreach($p as $v){
		if($v != "." && $v != ".."){
			$n = substr($v,count($v)-1,-4);
			echo "<a val=\"#$n\">$n</a>";
		}
	} 
	?>
</div>


<?php

include 'docs/seletores.php';

?>


<!-- prism -->
<link rel="stylesheet" type="text/css" href="prism/prism.css">
<script src="prism/prism.js"></script>

<!-- clickcode -->
<link rel="stylesheet" type="text/css" href="clickcode/clickcode.css">
<script src="clickcode/clickcode.js"></script>

<!-- pagina -->
<link rel="stylesheet" type="text/css" href="style.css">
<link rel="stylesheet" type="text/css" href="docs/ambient.css">

