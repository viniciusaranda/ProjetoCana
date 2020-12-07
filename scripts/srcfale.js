function Enviar(){
    var nome = document.getElementById("nomeid");
    var nome2 = document.getElementById("nomeid2");
    var coment = document.getElementById("comentid");
    if (nome.value != "" && nome2.value != "" && coment.value != "") {
        alert("Obrigado sr(a) " + nome.value +" "+ nome2.value +" os seus dados foram encaminhados com sucesso");
    }
}