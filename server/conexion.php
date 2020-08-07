<?php

$servidor = "178.128.146.252";
$usuario = "admin_sigmauser";
$password = "pfaDKIJyPF";

try {
      $pdo = new PDO("mysql:host=$servidor;dbname=admin_sigmatest", $usuario, $password);      
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $pdo->exec("set names utf8");
      echo "Conexión realizada Satisfactoriamente";
    }

catch(PDOException $e)
    {
    echo "La conexión ha fallado: " . $e->getMessage();
    }

?>  