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
        $consulta = "";

        if ($alumno->legajo == 0){
            $consulta = "INSERT INTO alumnos (apellido,nombre,domicilio,telefono,taller,edad) VALUES ('$alumno->apellido', '$alumno->nombre', '$alumno->domicilio',$alumno->telefono,'$alumno->taller',$alumno->edad);";
        }else{
            $consulta = "INSERT INTO alumnos VALUES ($alumno->legajo,'$alumno->apellido','$alumno->nombre','$alumno->domicilio',$alumno->telefono,'$alumno->taller',$alumno->edad);";
        }

        if ($mysqli->query($consulta) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $consulta . "<br>" . $mysqli->error;
        }


    }

?>