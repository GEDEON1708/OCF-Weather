const key="71c124e80fa61f9a88b3b0f954e328fd";

function ColocarDadosNaTela(dados){
    document.querySelector(".nameOfcity").innerHTML= "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML= Math.floor(dados.main.temp) + "°C";
    document.querySelector(".text-Previs-temp").innerHTML= dados.weather[0].description;
    document.querySelector(".umidade").innerHTML= "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".logo-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
    //console.log(dados)

}

async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    ColocarDadosNaTela(dados)

}


function cliqueiNoBotao(){
    const cidade= document.querySelector(".input-city").value
    buscarCidade(cidade)
}



