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
            imagens[i].src = "./img/poltrona_livre.jpg";
        }
        
        console.log('imgTopo=' + imgtopo);
    }
}

