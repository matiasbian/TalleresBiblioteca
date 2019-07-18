<?php
    require('conexion.php');
    require('alumno.php');
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST');
    $datos = json_decode(file_get_contents("php://input"));

    if($datos != null)
	{

        $consulta = "DELETE FROM talleres WHERE nombreT = '$datos->taller'";


        if ($mysqli->query($consulta) === TRUE) {
            echo "Record modified successfully";
        } else {
            echo "Error: " . $consulta . "<br>" . $mysqli->error;
        }


    }

?>