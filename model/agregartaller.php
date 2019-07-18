<?php
    require('conexion.php');
    require('alumno.php');
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST');
    $datos = json_decode(file_get_contents("php://input"));

    if($datos != null)
	{

        $consulta = "INSERT INTO talleres (nombreT,valor) VALUES ('$datos->ntaller', $datos->nvalor);";


        if ($mysqli->query($consulta) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $consulta . "<br>" . $mysqli->error;
        }


    }

?>