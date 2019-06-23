<?php
    require('conexion.php');
    require('alumno.php');
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST');
    $datos = json_decode(file_get_contents("php://input"));

    if($datos != null)
	{
        $alumno = new Usuario($datos->legajo,$datos->apellido,$datos->nombre,$datos->domicilio,$datos->telefono,$datos->taller,$datos->edad);

        $consulta = "UPDATE alumnos SET legajo = $alumno->legajo,
                                        apellido = '$alumno->apellido', 
                                        nombre =  '$alumno->nombre', 
                                        domicilio = '$alumno->domicilio', 
                                        telefono = $alumno->telefono, 
                                        taller = '$alumno->taller',
                                        edad = $alumno->edad 
                     WHERE legajo = $datos->buscar;";
 

        if ($mysqli->query($consulta) === TRUE) {
            echo "Modificado Correctamente";
        } else {
            echo "Error: " . $consulta . "<br>" . $mysqli->error;
        }


    }

?>