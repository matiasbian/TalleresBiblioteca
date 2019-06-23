<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST');
    require('conexion.php');
    $datos = json_decode(file_get_contents("php://input"));
	session_start();
	
	if(isset($_SESSION["user"])){
		header("Location: welcome.php");
	}
	
	if($datos != null)
	{
		$usuario = mysqli_real_escape_string($mysqli,$datos->usuario);
		$password = mysqli_real_escape_string($mysqli,$datos->password);
		$error = '';
		
		$sha1_pass = sha1($password);
		
		$sql = "SELECT id, user FROM login WHERE user = '$usuario' AND pass = '$password'";
        $result=$mysqli->query($sql);
		$rows = $result->num_rows;
		if($rows > 0) {
			$row = $result->fetch_assoc();
			$_SESSION['id'] = $row['id'];
			$arr = array('id' => $row['id'], 'username' => $row['user']);
			echo json_encode($arr);
			} else {
			var_dump(http_response_code(401));
			$error = "El nombre o contraseña son incorrectos";
			echo $error;
		}
	}else{
        echo json_encode( $datos);
    }
?>