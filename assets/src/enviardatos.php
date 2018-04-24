<?php
if($_POST) {
	$Name=$_POST['Name'];
	$Email=$_POST['Email'];
	$Subject=$_POST['Subject'];
    $Mensaje=$_POST['Mensaje'];
    $Service= $_POST['Service'];
	echo json_encode(array("respuesta"=>'“Gracias por contactarse con nosotros, '.$Name,"type"=>'info'));

	// $texto ="Usuario: ". $Name. "\n";
    // $texto .="Email: ". $Email."\n";
    // $texto .="Servicio Interesado: ". $Service."\n";
    // $texto .="Mensaje Adicional: ". $Mensaje."\n";
    // if(mail("info@tireman-center.com",$Subject."-".$Name, $texto )){
    //     echo json_encode(array("respuesta"=>'Gracias por contactarse con nosotros, ',"type"=>'info'));
    // }else{
    //     echo json_encode(array("respuesta"=>'Error Problemas con el correo',"type"=>'dnager'));
    // }

}