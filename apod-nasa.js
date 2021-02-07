//tem um erro que não consegui safar!


let botao = document.querySelector ("button")
let imagem = document.getElementById ("imgDoDia")
let legenda = document.getElementById ("legenda")
let data = document.getElementById ("dataDaImagem")
let explicacaoImagem = document.getElementById ("textoImagem")

let req = new XMLHttpRequest()


//página
req.open('GET', `https://api.nasa.gov/planetary/apod?api_key=C9wJ0lVhz2BWRvIpbalUyep1CdysPkR2Scrr7vgp`, false)
req.addEventListener("load", function (event) 
{
    //event.preventDefault()
    if (this.status === 200 && this.readyState === 4) 
    {
        let resposta = JSON.parse(req.responseText)
        console.log (resposta)

        imagem.src = resposta.url
        explicacaoImagem.textContent = resposta.explanation
        legenda.textContent = resposta.title
        //data.textContent = resposta.date
    }
})

req.send()

// let date = document.getElementById("dataDaImagem").value

// let reqBotao = new XMLHttpRequest()


// reqBotao.open('GET', `https://api.nasa.gov/planetary/apod?api_key=C9wJ0lVhz2BWRvIpbalUyep1CdysPkR2Scrr7vgp&date=${date}`, false)

//     reqBotao.onreadystatechange = function () 
//     {
        
//         if ( this.status === 200 && this.readyState === 4) 
//         {
//             let dados = JSON.parse(reqBotao.responseText)
//             console.log(dados)
            
//             imagem.src = resposta.url
//             explicacaoImagem.textContent = resposta.explanation
//             legenda.textContent = resposta.title
//
//         }
//     }

   
//     reqBotao.send()


