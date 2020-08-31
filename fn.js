// esconde div com resultados
$("#resultados").hide(); // padrão jquery


var petshopLista = []; // lista dos petshops disponiveis


//--  petshops
let MeuCaninoFeliz = {
	nome:"Meu Canino Feliz",
	valores: {
		semanal: {
			grandes: 40,
			pequenos:20,
		},
		fimDeSemana:{
			grandes:"",
			pequenos:"",
		},
	},
	distante: {
        unidadeDeMedida : "Km",
        valor: 2
    }
} 
// adicionar porcentagem no fim de semana  do MeucaninoFeliz para que tenha valor para fim de semana
function MeucaninoPorcentagem(){
    //para cães grandes
    let calculo = MeuCaninoFeliz.valores.semanal.grandes * 20/100

     calculo = calculo + MeuCaninoFeliz.valores.semanal.grandes

    MeuCaninoFeliz.valores.fimDeSemana.grandes = calculo
    

    //para cães pequenos
    calculo = MeuCaninoFeliz.valores.semanal.pequenos * 20/100

    calculo = calculo + MeuCaninoFeliz.valores.semanal.pequenos

    MeuCaninoFeliz.valores.fimDeSemana.pequenos = calculo

 }
 MeucaninoPorcentagem();

let vaiRex = {
	nome:"vaiRex",
	valores: {
		semanal: {
			grandes:15,
			pequenos:50,
		},
		fimDeSemana:{
			grandes:55,
			pequenos:20,
		},
	},
	distante: {
        unidadeDeMedida : "Km",
        valor: 1.7
    }, 
} 
let chowChawgas = {
	nome:"chowChawgas",
	valores: {
		semanal: {
			grandes:"",
			pequenos:"",
		},
		fimDeSemana:{
			grandes:"",
			pequenos:"",
		},
	},
	distante: {
        unidadeDeMedida : "m",
        valor: 800
    }
} 
//metodo de conversão para km do objeto chowchawgas que estava em metros, igualando com todos os outros objetos.
function conversorKm (e) {
    let conversao = e/1000
    chowChawgas.distante.valor = conversao
    chowChawgas.distante.unidadeDeMedida = "Km"
}conversorKm(chowChawgas.distante.valor)
//adiciona valor igual para todos os dias de semana da chowchawgas
window.onload = ()=>{
    let fimDeSemana = chowChawgas.valores.fimDeSemana;
    let semana = chowChawgas.valores.semanal

    fimDeSemana.grandes = 45
    semana.grandes = fimDeSemana.grandes

    fimDeSemana.pequenos = 30
    semana.pequenos = fimDeSemana.pequenos
}

petshopLista.push(MeuCaninoFeliz);
petshopLista.push(vaiRex);
petshopLista.push(chowChawgas);



//função para verificar menor preço por semana ou fim de sermana

let custoBeneficio =(week,smallDogs,bigDogs)=>{
    //denbug
    if(week == 1){
 
       // valor total do que foi digitado de acordo com a selção da data
        var totalPrimeiraLoja = (MeuCaninoFeliz.valores.semanal.grandes * bigDogs) + ( MeuCaninoFeliz.valores.semanal.pequenos * smallDogs);
        
        var totalSegundaLoja = (vaiRex.valores.semanal.grandes * bigDogs) + ( vaiRex.valores.semanal.pequenos * smallDogs);

        var totalTerceiraLoja = (chowChawgas.valores.semanal.grandes * bigDogs) + ( chowChawgas.valores.semanal.pequenos * smallDogs);
        
        var comparar = [totalPrimeiraLoja,totalSegundaLoja,totalTerceiraLoja];
        
        // listando valores:
        console.log("VALORES PARA CADA PETSHOP \n =================");
        console.log("Meu Canino Feliz : R$" + totalPrimeiraLoja +",00");
        console.log("Vai Rex : R$" + totalSegundaLoja +",00");
        console.log("ChowChawgas : R$" + totalTerceiraLoja +",00");
        console.log("===========RESULTADO==========");

        let menorValor = comparar.indexOf(Math.min(...comparar))

        //switch com uso de jquery
        switch (menorValor) {
            case 0 :
                $("#resultados").show();
                console.log("Meu Canino Feliz tem o melhor custo Beneficio -- VALOR : R$"+totalPrimeiraLoja+",00");
                $(".card-title").html("Meu Canino Feliz")
                $("#Total").html(totalPrimeiraLoja)
                break;
            case 1 :
                $("#resultados").show();
                console.log("Vai Rex Petshop tem o melhor custo Beneficio -- VALOR : R$"+totalSegundaLoja+",00");
                $(".card-title").html("Vai Rex Petshop")
                $("#Total").html(totalSegundaLoja)
                break;
            case 2 :
                $("#resultados").show();
                console.log("Chowchawgas Petshop tem o melhor custo Beneficio -- VALOR : R$"+totalTerceiraLoja+",00");
                $(".card-title").html("Chowchawgas Petshop")
                $("#Total").html(totalTerceiraLoja)
                break;
            
            default:
                break;
        }

    }else{
        // valor total do que foi digitado de acordo com a selção da data
        var totalPrimeiraLoja = (MeuCaninoFeliz.valores.fimDeSemana.grandes * bigDogs) + ( MeuCaninoFeliz.valores.fimDeSemana.pequenos * smallDogs);
        
        var totalSegundaLoja = (vaiRex.valores.fimDeSemana.grandes * bigDogs) + ( vaiRex.valores.fimDeSemana.pequenos * smallDogs);

        var totalTerceiraLoja = (chowChawgas.valores.fimDeSemana.grandes * bigDogs) + ( chowChawgas.valores.fimDeSemana.pequenos * smallDogs);
        //insere primeira loja em vetor
     
        var comparar = [totalPrimeiraLoja,totalSegundaLoja,totalTerceiraLoja];

     
        
        let menorValor = comparar.indexOf(Math.min(...comparar))

        //switch com uso de jquery
        switch (menorValor) {
            case 0 :
                $("#resultados").show();

                console.log("Meu Canino Feliz tem o melhor custo Beneficio -- VALOR : R$"+totalPrimeiraLoja+",00");
                $(".card-title").html("Meu Canino Feliz")
                $("#Total").html(totalPrimeiraLoja)
                break;
            case 1 :
                $("#resultados").show();
                console.log("Vai Rex Petshop tem o melhor custo Beneficio -- VALOR : R$"+totalSegundaLoja+",00");
                $(".card-title").html("Vai Rex Petshop")
                $("#Total").html(totalSegundaLoja)
                break;
            case 2 :
                $("#resultados").show();
                console.log("Chowchawgas Petshop tem o melhor custo Beneficio -- VALOR : R$"+totalTerceiraLoja+",00");
                $(".card-title").html("Chowchawgas Petshop")
                $("#Total").html(totalTerceiraLoja)
                break;
            
            default:
                break;
        }
    }
}
//recebendo datas e erificando se é ou não fim de semana
var search = document.getElementById("btn-search")
search.addEventListener("click",()=>{
    let date = document.getElementById("input-date").value

    function fimdesemana (e) {
        //console.log(e)
        var Minha_data = new Date(e);
        if(Minha_data.getDay() == 5 || Minha_data.getDay() == 6){
           
           var campoPequenos = document.getElementById("qtd-pequenos").value
           var campoGrandes = document.getElementById("qtd-grandes").value
           custoBeneficio(0,campoPequenos,campoGrandes);
        }else{
            var campoPequenos = document.getElementById("qtd-pequenos").value
            var campoGrandes = document.getElementById("qtd-grandes").value
            
            custoBeneficio(1,campoPequenos,campoGrandes);    
        }
    }
    fimdesemana(date);
})

console.log("LISTANDO PETSHOPS \n ===========================")
console.log("Petshop 1 : \n "+ JSON.stringify(petshopLista[0]));
console.log("Petshop 2 : \n"+ JSON.stringify(petshopLista[0]));
console.log("Petshop 3 : \n"+ JSON.stringify(petshopLista[0]) + "\n =========================");
