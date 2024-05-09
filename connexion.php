<?php

$servername = "localhost";
$username = "root"; 
$password = "";
$database = "productos";

// Crear conexión
$connex = new mysqli($servername, $username, $password, $database);

// productos
$sql = "SELECT * FROM productos";
$result = $conn->query($sql);

