mostrar_carteles();



function mostrar_carteles(){



       var xhr = new XMLHttpRequest();
 
       xhr.open("GET","php/msj.php",true);
       xhr.send(null);
    
       xhr.onreadystatechange = function(){
           if(xhr.readyState == 4 && xhr.status == 200){
             ofertas =  JSON.parse(xhr.responseText);
        
            console.log(ofertas[0][0][0]);
    
    document.getElementById('h3_nombre_oferta00').innerHTML = ofertas[0][0][0];
    document.getElementById('h3_precio_oferta00').innerHTML = ofertas[0][0][1];
    
    document.getElementById('h3_nombre_oferta01').innerHTML = ofertas[0][1][0];
    document.getElementById('h3_precio_oferta01').innerHTML = ofertas[0][1][1];
    
    document.getElementById('h3_nombre_oferta02').innerHTML = ofertas[0][2][0];
    document.getElementById('h3_precio_oferta02').innerHTML = ofertas[0][2][1];
    
    
    document.getElementById('h3_nombre_oferta03').innerHTML = ofertas[0][3][0];
    document.getElementById('h3_precio_oferta03').innerHTML = ofertas[0][3][1];
    
    document.getElementById('h3_nombre_oferta04').innerHTML = ofertas[0][4][0];
    document.getElementById('h3_precio_oferta04').innerHTML = ofertas[0][4][1];
    
    document.getElementById('h3_nombre_oferta05').innerHTML = ofertas[0][5][0];
    document.getElementById('h3_precio_oferta05').innerHTML = ofertas[0][5][1];
    
    document.getElementById('titulo_letrero01').innerHTML = ofertas[0][6][0];

    document.getElementById('h2_ciudad_destino').innerHTML = ofertas[0][7][0];

   // document.getElementById('inp_precio7').value = ofertas[0][6][1];
    

    //document.getElementById('inp_titulo_oferta').value = ofertas[0][7][0];
    
           }
       
    }

}
