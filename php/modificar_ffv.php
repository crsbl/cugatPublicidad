

<?php


include "conexion.php";



$array_modificar =(json_decode($_POST['array_modificar']));




    $sql_guardar = "UPDATE `ofertas` SET `oferta_nombre` = '$array_modificar[1]', `oferta_precio` = '$array_modificar[2]' WHERE `ofertas`.`oferta_cod` = $array_modificar[0];";
   
    if(mysqli_query($conn, $sql_guardar)){
        echo "precio Modificado";
    exit;

    } else{
        echo "ERROR $sql. " . mysqli_error($link);
    }
    mysqli_close($conn);



?>
