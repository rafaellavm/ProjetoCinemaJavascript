//true = disponível
//false = indisponível
var poltronas = [false,true,false,true,true,true,false,true,false];

window.onload = function(){

    carregarPoltronas();
}

function carregarPoltronas(){

    //retorna um array de imagens
    var imagens = document.getElementsByTagName('img');
    
    for(var i= 0; i < imagens.length; i++){

        var imgtopo = imagens[i].src.toString().includes('topo');   
        
        if (imgtopo == false){

         if (poltronas[i]){

            imagens[i].src = "./img/poltrona_livre.jpg";
        }
        else{

            imagens[i].src = "./img/poltrona_ocupada.jpg";
        }
    }


    console.log('imgTopo=' + imgtopo);
}
}

function selecionarPoltrona(){

    var imagens = document.getElementsByTagName('img');
    
    //selecionar as poltronas disponíveis
    for (var i = 0; i < poltronas.length; i++){

        var imgtopo = imagens[i].src.toString().includes('topo'); 
        
        if (poltronas[i]){

            if (imgtopo == false){
               
               imagens[i].src = "./img/poltrona_reservada.jpg";
               var quer = confirm('Você quer essa poltrona?');
               
               if(quer){
                break;
               }
               else{
                imagens[i].src = "./img/poltrona_disponível.jpg";
               }
               
            }
        }
    }
}

