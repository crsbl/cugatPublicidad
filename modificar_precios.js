




















function modificar_cartel(comp){

var id_btn = comp.id;

var cod_cambio = id_btn.substr(10, 1);

if (cod_cambio == '1')
{
    document.getElementById("inp_titulo1").style.webkitAnimationName = "";
    setTimeout(function ()
    {
        document.getElementById("inp_titulo1").style.webkitAnimationName = "modificado_";
    }, 0);

    document.getElementById("inp_precio1").style.webkitAnimationName = "";
    setTimeout(function ()
    {
        document.getElementById("inp_precio1").style.webkitAnimationName = "modificado_";
    }, 0);
    var titulo = document.getElementById('inp_titulo1').value;
    var precio = document.getElementById('inp_precio1').value;
}
if (cod_cambio == '2')

{
    document.getElementById("inp_titulo2").style.webkitAnimationName = "";
    setTimeout(function ()
    {
        document.getElementById("inp_titulo2").style.webkitAnimationName = "modificado_";
    }, 0);

    document.getElementById("inp_precio2").style.webkitAnimationName = "";
    setTimeout(function ()
    {
        document.getElementById("inp_precio2").style.webkitAnimationName = "modificado_";
    }, 0);


    var titulo = document.getElementById('inp_titulo2').value;
    var precio = document.getElementById('inp_precio2').value;
}
if (cod_cambio == '3')
{

    document.getElementById("inp_titulo3").style.webkitAnimationName = "";
    setTimeout(function ()
    {
        document.getElementById("inp_titulo3").style.webkitAnimationName = "modificado_";
    }, 0);

    document.getElementById("inp_precio3").style.webkitAnimationName = "";
    setTimeout(function ()
    {
        document.getElementById("inp_precio3").style.webkitAnimationName = "modificado_";
    }, 0);

    var titulo = document.getElementById('inp_titulo3').value;
    var precio = document.getElementById('inp_precio3').value;
}
if (cod_cambio == '4')
{

    document.getElementById("inp_titulo4").style.webkitAnimationName = "";
    setTimeout(function ()
    {
        document.getElementById("inp_titulo4").style.webkitAnimationName = "modificado_";
    }, 0);

    document.getElementById("inp_precio4").style.webkitAnimationName = "";
    setTimeout(function ()
    {
        document.getElementById("inp_precio4").style.webkitAnimationName = "modificado_";
    }, 0);


    var titulo = document.getElementById('inp_titulo4').value;
    var precio = document.getElementById('inp_precio4').value;
}
if (cod_cambio == '5')
{

    document.getElementById("inp_titulo5").style.webkitAnimationName = "";
    setTimeout(function ()
    {
        document.getElementById("inp_titulo5").style.webkitAnimationName = "modificado_";
    }, 0);

    document.getElementById("inp_precio5").style.webkitAnimationName = "";
    setTimeout(function ()
    {
        document.getElementById("inp_precio5").style.webkitAnimationName = "modificado_";
    }, 0);

    var titulo = document.getElementById('inp_titulo5').value;
    var precio = document.getElementById('inp_precio5').value;
}
if (cod_cambio == '6')
{
    document.getElementById("inp_titulo6").style.webkitAnimationName = "";
    setTimeout(function ()
    {
        document.getElementById("inp_titulo6").style.webkitAnimationName = "modificado_";
    }, 0);

    document.getElementById("inp_precio6").style.webkitAnimationName = "";
    setTimeout(function ()
    {
        document.getElementById("inp_precio6").style.webkitAnimationName = "modificado_";
    }, 0);

    var titulo = document.getElementById('inp_titulo6').value;
    var precio = document.getElementById('inp_precio6').value;
}


if (cod_cambio == '9')

{
 

    document.getElementById("inp_titulo_oferta").style.webkitAnimationName = "";
    setTimeout(function ()
    {
        document.getElementById("inp_titulo_oferta").style.webkitAnimationName = "modificado_";
    }, 0);
    var titulo = document.getElementById('inp_titulo_oferta').value;
 
}



if (id_btn == 'btn_cartela10')

{
 
    cod_cambio='10';
    document.getElementById("inp_destino_camion").style.webkitAnimationName = "";
    setTimeout(function ()
    {
        document.getElementById("inp_destino_camion").style.webkitAnimationName = "modificado_";
    }, 0);
    var titulo = document.getElementById('inp_destino_camion').value;
 
}












var array_modificar = new Array (JSON.stringify([cod_cambio, titulo, precio]));

var xhr = new XMLHttpRequest();

xhr.open("POST","php/modificar_ffv.php");
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.send("&array_modificar=" + array_modificar);

xhr.onreadystatechange = function(){

    if(xhr.readyState == 4 && xhr.status == 200){
        console.log(xhr.responseText);

        mostrar_carteles();


    }
}



}