<?php
$db = new SQLite3('usuarios.db');
 
$query = "CREATE TABLE IF NOT EXISTS usuarios (nombres STRING, apellidos STRING, contrasena STRING)";
$db->exec($query);
 
?>