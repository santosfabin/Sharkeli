

function ligar_desligar(){
    var cor = document.getElementById("botao_checar").value;

    if(cor == true){
        document.getElementById("barrademenu").style.backgroundColor = '#FFFFFF';
        document.body.style.backgroundColor = '#F0F0F0';
        document.body.style.color = '#4f4f4f';

/*INPUT*/
        document.getElementById("user").style.borderColor = '#3D3D3D';
        document.getElementById("passwd").style.borderColor = '#3D3D3D';

/*INPUT*/

        document.getElementById("quadrado").style.backgroundColor = '#FFFFFF';
        document.getElementById("letra").style.color = '#3D3D3D';
        document.getElementById("login").style.color = '#3D3D3D';
        document.getElementById("login").style.borderColor = '#3D3D3D';


        cor = document.getElementById("botao_checar").value=0;

    }else{
        document.getElementById("barrademenu").style.backgroundColor = '#1F1F1F';
        document.body.style.backgroundColor = '#030303';
        document.body.style.color = '#CCC';

/*INPUT*/

        document.getElementById("user").style.borderColor = '#fff';
        document.getElementById("passwd").style.borderColor = '#fff';

/*INPUT*/
        document.getElementById("quadrado").style.backgroundColor = '#3D3D3D';
        document.getElementById("letra").style.color = '#ccc';
        document.getElementById("login").style.color = '#ccc';
        document.getElementById("login").style.borderColor = '#ccc';


	    cor = document.getElementById("botao_checar").value=1;

    }
    localStorage.setItem('tema', cor);
}


function mudar_tema(){
    
        var cor = localStorage.getItem("tema");
        if(cor == 0){
            document.getElementById("barrademenu").style.backgroundColor = '#FFFFFF';
            document.body.style.backgroundColor = '#F0F0F0';
            document.body.style.color = '#4f4f4f';
    
    /*INPUT*/
            document.getElementById("user").style.borderColor = '#3D3D3D';
            document.getElementById("passwd").style.borderColor = '#3D3D3D';
    
    /*INPUT*/
    
            document.getElementById("quadrado").style.backgroundColor = '#FFFFFF';
    
    
            cor = document.getElementById("botao_checar").value=0;
    
        }else{
                document.getElementById("barrademenu").style.backgroundColor = '#1F1F1F';
                document.body.style.backgroundColor = '#030303';
                document.body.style.color = '#CCC';
    
    /*INPUT*/
    
            document.getElementById("user").style.borderColor = '#fff';
            document.getElementById("passwd").style.borderColor = '#fff';
    
    /*INPUT*/
            document.getElementById("quadrado").style.backgroundColor = '#3D3D3D';
            document.getElementById("login").style.borderColor = '#ccc';
    
    
                cor = document.getElementById("botao_checar").value=1;
    
        }

        
    }