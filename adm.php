
<?php error_reporting(0); if( $_COOKIE['user'] == "herick" && $_COOKIE['pass'] == "herick0800" ){ ?>

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

<button id="_fechar">x</button>


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


<script>



	muda()


	_fechar.onclick=function(){
		document.cookie="user=";
		document.cookie="pass=";
		window.location.href ="./"
	}


	
</script>




<?php

if(isset($_POST['tx'])){

	$arquivo = $_POST['tx'];
	$conteudo = $_POST['conteudo'];

	$fp = fopen("$arquivo", "w+");
	fwrite($fp, "$conteudo");
	fclose($fp);
}else{

	?>


	<?php }}else{ ?>


	<link rel="stylesheet" type="text/css" href="style.css">

	<div id="admarea">

		<div>

			<input id="log" placeholder="Login" autofocus spellcheck="false">
			<input id="pass" type="password" placeholder="Pass" spellcheck="false">

		</div>

		<script>
			log.onkeyup=function(e){ lv = this.value ; logar(e,this) }
			pass.onkeyup=function(e){ pv = this.value ; logar(e,this) }

			function logar(e,g){
				if(e.key == "Enter"){
					document.cookie = "user="+lv
					document.cookie = "pass="+pv
					console.log(lv+":"+pv)
					window.location="adm.php"
				}
			}


		</script>

	</div>

	<?php } ?>