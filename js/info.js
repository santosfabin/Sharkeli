let valor = 0;
function ligar_desligar(){
    var cor = document.getElementById("botao_checar").value;

    if(cor == true){
        document.getElementById("barrademenu").style.backgroundColor = '#FFFFFF';
        document.body.style.backgroundColor = '#F0F0F0';
        document.body.style.color = '#4f4f4f';

        cor = document.getElementById("botao_checar").value=0;
    }else{

        document.getElementById("barrademenu").style.backgroundColor = '#1F1F1F';
        document.body.style.backgroundColor = '#030303';
        document.body.style.color = '#CCC';

	    cor = document.getElementById("botao_checar").value=1;
        }

    localStorage.setItem('tema', cor);
    




    var imagem = document.getElementById("botao_checar");
    
    if(valor == 0) {
        if(imagem.style.getPropertyValue('transform').valueOf() != "rotate(360deg)") {
            imagem.style.transform = 'rotate(360deg)';
        }else if(imagem.style.getPropertyValue('transform').valueOf() == "rotate(360deg)"){
            imagem.style.transform = 'rotate(0deg)';
        }
        imagem.style.opacity = "0";
    }else {
        imagem.style.opacity = "0";
        if(imagem.style.getPropertyValue('transform').valueOf() != "rotate(360deg)") {
            imagem.style.transform = 'rotate(360deg)';
        }else if(imagem.style.getPropertyValue('transform').valueOf() == "rotate(360deg)"){
            imagem.style.transform = 'rotate(0deg)';
        }
    }

    const timer = setInterval(() => {
        if(valor == 0) {
            imagem.src = "../dagroins/darktutu.png";
            imagem.style.opacity = "1";
            valor = 1;
            localStorage.setItem('tubarao', valor);
            clearInterval(timer);
        }else{
            imagem.src = "../dagroins/whitetutu.png";
            imagem.style.opacity = "1";
            valor = 0;
            localStorage.setItem('tubarao', valor);
            clearInterval(timer);
        }
    }, 150);

}
function mudar_tema(){
    var cor = localStorage.getItem("tema");
    var imagem = document.getElementById("botao_checar");

    if(cor == 0){
        document.getElementById("barrademenu").style.backgroundColor = '#FFFFFF';
        document.body.style.backgroundColor = '#F0F0F0';
        document.body.style.color = '#4f4f4f';

        imagem.src = "../dagroins/darktutu.png";
        valor = 1;
        localStorage.setItem('tubarao', valor);

        cor = document.getElementById("botao_checar").value=0;
    }else{

        document.getElementById("barrademenu").style.backgroundColor = '#1F1F1F';
        document.body.style.backgroundColor = '#030303';
        document.body.style.color = '#CCC';
        
        imagem.src = "../dagroins/whitetutu.png";


        valor = 0;
        localStorage.setItem('tubarao', valor);


	    cor = document.getElementById("botao_checar").value=1;
        }


}
