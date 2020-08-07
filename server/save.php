<?php
require('conexion.php');
    $datos = json_decode(file_get_contents('php://input'));

    $dep = $datos->departamento;
    $ciudad = $datos->ciudad;
    $nombre = $datos->nombre;
    $email = $datos->email;

    $query_inserta = 'insert into contacts (name,email,state, city) values (?,?,?,?)';
    $insertar = $pdo->prepare($query_inserta);
    $insertar->execute(array($nombre, $email, $dep, $ciudad));
?>