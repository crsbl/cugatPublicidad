
<?php  

include_once 'conexion.php'
?>
<?php  
$datos = $conn->query("SELECT ofertas.oferta_nombre, ofertas.oferta_precio FROM ofertas");
$usuarios = array($datos-> fetch_all());
$usuarioss ='hola';

echo json_encode($usuarios);



?>