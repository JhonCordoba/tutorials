<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Proyecto: Gestor de Usuarios</title>
	<link rel="stylesheet" type="text/css" href="styles.css">

	<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js " />
	<script>
		window.jsPDF = window.jspdf.jsPDF;
		var docPDF = new jsPDF();
		function print(){
			var elementHTML = document.querySelector("table");
			docPDF.html(elementHTML, {
			callback: function(docPDF) {
			docPDF.save('usuarios.pdf');
			},
			x: 15,
			y: 15,
			width: 170,
			windowWidth: 650
			});
		}
	</script>
</head>
<body>
<a href="add.php">Crear nuevo usuario</a>

<button onclick="print()"> Descargar Reporte de Usuarios PDF </button>



<table border="2">
	<thead>
		<th>ID</th>
		<th>Nombres</th>
		<th>Apellidos</th>
	</thead>
	<tbody>
		<?php
			include 'databaseConfig.php';
			$sql = "SELECT rowid, * FROM usuarios";
			$query = $db->query($sql);
 
			while($row = $query->fetchArray()){
				echo "
					<tr>
						<td>".$row['rowid']."</td>
						<td>".$row['nombres']."</td>
						<td>".$row['apellidos']."</td>
						<td>
							<a href='edit.php?id=".$row['rowid']."'>Editar</a>
							<a href='delete.php?id=".$row['rowid']."'>Eliminar</a>
						</td>
					</tr>
				";
			}
		?>
	</tbody>
</table>
</body>
</html>