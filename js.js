const estados = [
    {
    uf: "Informatica", cidades: [
        {id: 1, nome: "1I3"}
       ,{id: 2, nome: "2I3"}
       ,{id: 3, nome: "3I3"}
       ] 
   }
   ,
   {
       uf: "Administração", cidades: [
         {id: 4, nome: "1A3"}
       , {id: 5, nome: "2A3"}
       , {id: 6, nome: "3A3"}
       ] 
   }
 
   ];
   

const alteraEstado = () =>{
    const selectEstado = document.getElementById("estado");
    const estadoSelecionado = selectEstado.value;

    const selectCidade = document.getElementById("cidade");
    selectCidade.innerHTML = "";

    const divSaida = document.getElementById("saida");
    divSaida.innerHTML = "";

    if(estadoSelecionado){
        adicionaOpcaoSelect(selectCidade, "", "Selecione o modulo");

        const ufFiltro = estados.filter(
            estado => estado.uf === estadoSelecionado)[0];  
        
        ufFiltro.cidades.forEach(
            cidade => adicionaOpcaoSelect(selectCidade, cidade.id, cidade.nome)
        );
    }

    ajustaComboCidades();

};

const ajustaComboCidades = () => {
    const selectCidade = document.getElementById("cidade");

    if (selectCidade.length > 0){
        selectCidade.disabled = false;
    }else{
        adicionaOpcaoSelect(selectCidade, "", "---Selecione o modulo---");
        selectCidade.disabled = true;
    }
};

const alteraCidade = () => {
    const divSaida = document.getElementById("saida");
    const selectEstado = document.getElementById("estado");
    const selectCidade = document.getElementById("cidade");

    const estadoSelecionado = selectEstado.value;
    const cidadeSelecionada = selectCidade.options[selectCidade.selectedIndex].text;
    if (selectCidade.value){
        divSaida.innerHTML = `${cidadeSelecionada}/${estadoSelecionado}`;
    }else{
        divSaida.innerHTML = "";
    }
};

const adicionaOpcaoSelect = (select, value, text) => {
    select.insertAdjacentHTML("beforeend"
                 , `<option value="${value}">${text}</option>`);
};

const iniciar = () => {
    document.getElementById("estado").addEventListener("change", alteraEstado);
    document.getElementById("cidade").addEventListener("change", alteraCidade);
    ajustaComboCidades();
};

document.addEventListener("DOMContentLoaded", iniciar);