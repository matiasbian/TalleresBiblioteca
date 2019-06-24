<?php
    require('conexion.php');
    require('alumno.php');
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET');
    $datos = json_decode(file_get_contents("php://input"));

    if (isset($_GET['id'])) {
        $id =  $_GET['id'];
        $consulta = "SELECT * FROM alumnos
                        JOIN talleres
                        ON alumnos.taller = talleres.nombre
                        WHERE legajo = $id ";
        $result = $mysqli->query($consulta);

        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                echo json_encode($row);
            }
        } else {
            var_dump(http_response_code(404));
            echo "No hay resultados";
        }

    } else {
        var_dump(http_response_code(400));
        echo "error en la URL";
    }

?>