<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Proyecto: Gestor de Usuarios</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
<form method="POST">
	<a href="index.php">Regresar</a>
	<p>
		<label for="nombres">nombres:</label>
		<input type="text" id="nombres" name="nombres">
	</p>
	<p>
		<label for="apellidos">Apellidos:</label>
		<input type="text" id="apellidos" name="apellidos">
	</p>

	<p>
		<label for="contraseña">Contraseña:</label>
		<input type="text" id="contrasena" name="contrasena">
	</p>

	<input type="submit" name="save" value="Guardar">
</form>
<?php

	if(isset($_POST['save'])){
		include 'databaseConfig.php';
 
		$sql = "INSERT INTO usuarios (nombres, apellidos, contrasena) VALUES ('".$_POST['nombres']."', '".$_POST['apellidos']."', '".$_POST['contrasena']."')";
		$db->exec($sql);
 
		header('location: list.php');
	}
?>
</body>
</html>
