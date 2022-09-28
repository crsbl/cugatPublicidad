mostrar_carteles();



function mostrar_carteles(){



       var xhr = new XMLHttpRequest();
 
       xhr.open("GET","php/msj.php",true);
       xhr.send(null);
    
       xhr.onreadystatechange = function(){
           if(xhr.readyState == 4 && xhr.status == 200){
             ofertas =  JSON.parse(xhr.responseText);
        
            console.log(ofertas[0][0][0]);
    
            
 


    document.getElementById('inp_titulo1').value = ofertas[0][0][0];
    document.getElementById('inp_precio1').value = ofertas[0][0][1];
    


    document.getElementById('inp_titulo2').value = ofertas[0][1][0];
    document.getElementById('inp_precio2').value = ofertas[0][1][1];


    document.getElementById('inp_titulo3').value = ofertas[0][2][0];
    document.getElementById('inp_precio3').value = ofertas[0][2][1];

    document.getElementById('inp_titulo4').value = ofertas[0][3][0];
    document.getElementById('inp_precio4').value = ofertas[0][3][1];

    document.getElementById('inp_titulo5').value = ofertas[0][4][0];
    document.getElementById('inp_precio5').value = ofertas[0][4][1];

    
    document.getElementById('inp_titulo6').value = ofertas[0][5][0];
    document.getElementById('inp_precio6').value = ofertas[0][5][1];
    


    document.getElementById('inp_titulo_oferta').value = ofertas[0][6][0];

    document.getElementById('inp_destino_camion').value = ofertas[0][7][0];



    


           }
       
    }

}
