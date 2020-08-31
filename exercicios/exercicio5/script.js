function cleann() {

    if (confirm("Deseja realmente Resetar?") == true) {
        document.curriculo.reset();
    } else {
    
    }
}


function verifica() {
    var nome;

    nome = document.curriculo.nome.value;

    if (nome.length < 4) {
        document.curriculo.nome.value = "";
        alert("Digite um formato de nome válido"); 
        envia = false;

    } else {
        nome = nome.toUpperCase();
        document.curriculo.nome.value = nome;
    }
    
    estadoCivil= document.curriculo.estadocivil.value;

    if(estadoCivil == ""){
        document.getElementById("aviso").innerHTML = "Selecione um estado civil valido";
        console.log("estado errado");
    }
    else{
        document.getElementById("aviso").innerHTML = "";
        console.log("estado certo");
    }

    if(document.curriculo.objetivo.value != ""){
        document.curriculo.objetivo.value= document.curriculo.objetivo.value.toLowerCase();
    }
    else{
        alert("Por favor não esqueça de inserir seus objetivos.");
    }
    
    if(document.curriculo.email.value == "" && document.curriculo.tel.value == ""){
        alert("Não está esquecendo de nada? Informe seu email ou telefone.");
    }

    if(document.curriculo.idiomaIng.value == ""){
        alert("Calminha!! Precisamos saber seu nivel de Ingles")
    }
    else{
        if( document.curriculo.idiomaEsp.value == ""){
            alert("Calminha!! Precisamos saber seu nivel de Espanhol")
        }
    }

    var cont=0;
    var testeCheckBox = document.getElementsByName('langs');

    for(let loop=0; loop<testeCheckBox.length;loop++){
        if(testeCheckBox[loop].checked== false){
            cont++;
        }
    }
    if(cont==7){
        if(confirm("Deseja enviar seu curriculo sem nenhuma Linguagem de programação?")==true){
            console.log("foiiiiii");
        }else{
            console.log("foi falsoooo");
        }
    }

}