//true = disponível
//false = indisponível
var poltronas = [false, true, false, true, true, true, false, true, false];

window.onload = function () {
    carregarPoltronas();

    var imagens = document.getElementsByTagName('img');
    for (var i= 0; i<imagens.length; i++){
        document.getElementsByTagName('img')[i].onclick = verificarStatusPoltrona(i);
    }
}

function verificarStatusPoltrona(poltrona){
    return function(){
        alert(document.getElementsByTagName('img')[poltrona].src);
    }  
}
function carregarPoltronas() {

    //retorna um array de imagens
    var imagens = document.getElementsByTagName('img');

    for (var i = 0; i < imagens.length; i++) {

        var imgtopo = imagens[i].src.toString().includes('topo');

        if (imgtopo == false) {

            if (poltronas[i]) {

                imagens[i].src = "./img/poltrona_livre.jpg";
            }
            else {

                imagens[i].src = "./img/poltrona_ocupada.jpg";
            }
        }

        console.log('imgTopo=' + imgtopo);
    }
}
function selecionarPoltrona() {

    var imagens = document.getElementsByTagName('img');

    //selecionar as poltronas disponíveis
    for (var i = 0; i < poltronas.length; i++) {

        var imgtopo = imagens[i].src.toString().includes('topo');

        if (poltronas[i]) {

            if (imgtopo == false) {

                imagens[i].src = "./img/poltrona_reservada.jpg";
                var quer = confirm('Você quer essa poltrona?');

                if (quer) {
                    break;
                }
                else {
                    imagens[i].src = "./img/poltrona_disponível.jpg";
                }

            }
        }
    }
}
function selecionarCasal()   {

    var imagens = document.getElementsByTagName('img');

    for (var i = 0; i < poltronas.length; i++) {
        var imgtopo = imagens[i].src.toString().includes('topo');
        
        if (poltronas[i] && poltronas[i+1]) {
            if (imgtopo == false) {
                
                imagens[i].src = "./img/poltrona_reservada.jpg";
                imagens[i + 1].src = "./img/poltrona_reservada.jpg";
                
                var quer = confirm('Você quer essa poltrona?');
                if (quer) {
                    break;
                }
                else {
                    imagens[i].src = "./img/poltrona_disponível.jpg";
                    imagens[i + 1].src = "./img/poltrona_disponível.jpg";
                }
            }
        }
    }
}

