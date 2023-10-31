<?php
	include 'databaseConfig.php';


	$sql = "SELECT rowid, * FROM usuarios WHERE rowid = '".$_GET['id']."'";
	$query = $db->query($sql);
	$row = $query->fetchArray();
 
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Proyecto: Gestor de Usuarios</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
<form method="POST">
	<a href="list.php">Regresar</a>
	<p>
		<label for="firstname">Nombres:</label>
		<input type="text" id="nombres" name="nombres" value="<?php echo $row['nombres']; ?>">
	</p>
	<p>
		<label for="apellidos">Apellidos:</label>
		<input type="text" id="apellidos" name="apellidos" value="<?php echo $row['apellidos']; ?>">
	</p>

	<input type="submit" name="guardar" value="guardar">
</form>
<?php


	
	if(isset($_POST['guardar'])){
		$nombres = $_POST['nombres'];
		$apellidos = $_POST['apellidos'];
 		
		$sql = "UPDATE usuarios SET nombres = '$nombres', apellidos = '$apellidos' WHERE rowid = '".$_GET['id']."' ";
		$db->exec($sql);
 
		header('location: list.php');
	}
?>
</body>
</html>