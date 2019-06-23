<?php
    require('conexion.php');
    require('alumno.php');
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET');
    $datos = json_decode(file_get_contents("php://input"));

    if (isset($_GET['valor'])) {
        $valor =  $_GET['valor'];
        $consulta = "";
        if ($valor == 1){
            $consulta = "SELECT nombre,valor FROM talleres ";
        }else{
            $consulta = "SELECT nombre FROM talleres  ";
        }
        $result = $mysqli->query($consulta);
        $rows = array();
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $rows[] = $row;
            }      
        } 
        echo json_encode($rows);

    } else {
        var_dump(http_response_code(400));
        echo "error en la URL";
    }

?>