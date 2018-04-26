<?php
if($_POST) {
	$Name=$_POST['Name'];
	$Email=$_POST['Email'];
	$Subject=$_POST['Subject'];
    $Mensaje=$_POST['Mensaje'];
    $Service= $_POST['Service'];
	//echo json_encode(array("respuesta"=>'“Gracias por contactarse con nosotros, '.$Name,"type"=>'info'));

	$texto ="Usuario: ". $Name. "\n";
    $texto .="Email: ". $Email."\n";
    $texto .="Servicio Interesado: ". $Service."\n";
    $texto .="Mensaje Adicional: ". $Mensaje."\n";
     // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: '.$_POST['Email'].'' . "\r\n";

    $nombre_archivo = "correos.txt"; 
 
    if(file_exists($nombre_archivo))
    {
        $mensaje = "El Archivo $nombre_archivo se ha modificado";
    }

    else
    {
        $mensaje = "El Archivo $nombre_archivo se ha creado";
    }

    if($archivo = fopen($nombre_archivo, "a"))
    {
        $textot =$Name. "|";
        $textot .=$Email."|";
        $textot .=$Service."|";
        $textot .=$Mensaje."|";
        $textot .=date("d m Y H:m:s"). " ". $mensaje. "*\n";        
        if(fwrite($archivo, $textot))
        {
            $txtctr= "Se ha ejecutado correctamente";
        }
        else
        {
            $txtctr= "Ha habido un problema al crear el archivo";
        }

        fclose($archivo);
    }
    try{

     if(mail("info@tireman-center.com","FWS-TMC-".$Subject."-".$Name, $texto,$headers )){
         echo json_encode(array("respuesta"=>'Gracias por contactarse con nosotros, '.$Name,"type"=>'info',"trlup"=>$txtctr));
     }else{
        echo json_encode(array("respuesta"=>'Error Problemas con el correo',"type"=>'danger',"trlup"=>$txtctr));
     }
    }catch(Exception $e){
        echo json_encode(array("respuesta"=>'Error Problemas con el correo',"type"=>'danger',"trlup"=>$txtctr));
    }
}