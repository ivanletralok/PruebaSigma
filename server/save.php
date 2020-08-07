<?php
require('conexion.php');

    $datos = json_decode(file_get_contents('php://input'));
    utf8_decode($datos);

    $dep = $datos->departamento;
    $ciudad = $datos->ciudad;
    $nombre = $datos->nombre;
    $email = $datos->email;

   // echo $dep . " " . $ciudad . " " .$nombre ." " . $email;

    $query_inserta = 'insert into contacts (name,email,state, city) values (?,?,?,?)';
    $insertar = $pdo->prepare($query_inserta);
    $insertar->execute(array($nombre, $email, $dep, $ciudad));



?>