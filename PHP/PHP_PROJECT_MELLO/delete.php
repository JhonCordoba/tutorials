<?php
	include 'databaseConfig.php';
 
	$sql = "DELETE FROM usuarios WHERE rowid = '".$_GET['id']."'";
	$db->query($sql);
 
	header('location: list.php');
?>
