<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Proyecto: Gestor de Usuarios</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
	<?php

		include 'databaseConfig.php';

		if(isset($_POST['ingresar'])){

			$idUsuario = $_POST['idUsuario'];
			$contrasena = $_POST['contrasena'];

			$sql = "SELECT rowid, * FROM usuarios where rowid = '".$idUsuario."'";
			$query = $db->query($sql);



			while($row = $query->fetchArray()){

				if($row['contrasena'] === $contrasena){
					
                    $_SESSION["logged"] = true;
					header('location: list.php');
				}
			}
	 
		}
	?>

		<form method="post">
            <div >
                <label>Id del usuario</label>
                <input type="text" name="idUsuario" placeholder="Ejemplo: 1" />
            </div>    
            <div >
                <label>Contraseña</label>
                <input type="text" placeholder="Ejemplo: 1234" name="contrasena">
            </div>
            <div>
                <input type="submit" name="ingresar" value="ingresar">
            </div>
            <p>No tienes una cuenta?<a href="add.php">Registrate</a>.</p>
        </form>
</body>
</html>