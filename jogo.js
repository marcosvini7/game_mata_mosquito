var altura = window.innerHeight
var largura = window.innerWidth
var vidas = 4
var tempo = 15
var dificuldade
var nivel = window.location.search
nivel = nivel.replace('?','')
var tempoCriaMosquito

function dicas(){
	var dica
	var entrada = Math.floor(Math.random()*11)
	switch(entrada){
		case 0:
			dica = 'Mate os mosquitos o mais rápido que puder!'
			break
		case 1:
			dica = 'Não tenha medo deles!'
			break
		case 2:
			dica = 'Se o tempo esgotar, você vence!'
			break
		case 3:
			dica = 'Sobreviva até o tempo acabar!'
			break
		case 4:
			dica = 'Com um único clique você consegue esmagá-los!'
			break
		case 5:
			dica = 'Não se distraia com a bela paisagem, os mosquitos estão atacando!'
			break
		case 6:
			dica = 'Se não mata-los a tempo, suas vidas diminuem!'
			break
		case 7:
			dica = 'Ou você mata, ou morre, simples assim!'
			break
		case 8:
			dica = 'Um guerreiro nunca desiste da luta!'
			break
		case 9:
			dica = 'Se não conseguir vencer você pode tentar novamente'
			break
		case 10:
			dica = 'Acerte-os com vontade!'
			break
	}
	document.getElementById('dicas').innerHTML = dica
}

function escolherFundo(){
	var fundo
	var valor = Math.floor(Math.random()*5)
	switch(valor){
		case 0:
			fundo = 'fundo1'
			break
		case 1:
			fundo = 'fundo2'
			break
		case 2:
			fundo = 'fundo3'
			break
		case 3:
			fundo = 'fundo4'
			break
		case 4:
			fundo = 'fundo5'
			break
	}
	document.getElementById('fundo').className = fundo
}

switch(nivel){
	case 'facil':
		tempoCriaMosquito = 1500
		break
	case 'normal':
		tempoCriaMosquito = 1250
		break
	case 'dificil':
		tempoCriaMosquito = 1000
		break
	case 'chucknorris':
		tempoCriaMosquito = 750
		break
 }


function ajustarTela(){
	altura = window.innerHeight
    largura = window.innerWidth 
}

function cronometro(){
	tempo--

	if(tempo > 0){
		document.getElementById('cronometro').innerHTML = tempo	
	} else {
		document.getElementById('cronometro').innerHTML = tempo	
		clearInterval(intervalo)
		clearInterval(criarMosquito)
		window.location.href='vitoria.html'		
	}
}


function adicionarMosquito(){
	if(document.getElementById('mosquito')){
		vidas--
		document.getElementById('mosquito').remove()
		switch(vidas){
			case 3:
				document.getElementById('c3').src = 'imagens/coracao_vazio.png'
				break
			case 2:
				document.getElementById('c3').src = 'imagens/coracao_vazio.png'
				document.getElementById('c2').src = 'imagens/coracao_vazio.png'
				break
			case 1:
				document.getElementById('c3').src = 'imagens/coracao_vazio.png'
				document.getElementById('c2').src = 'imagens/coracao_vazio.png'
				document.getElementById('c1').src = 'imagens/coracao_vazio.png'
				break
			case 0:
				document.location.href = 'fimdejogo.html'
		}
	}

	var posicaoX = Math.floor(Math.random() * largura) - 100
	var posicaoY = Math.floor(Math.random() * altura) - 100
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png'
	mosquito.className = tamanho() + ' ' + lado()
	mosquito.style.position = 'absolute'
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()
	}
	document.body.appendChild(mosquito)
}
function tamanho(){
	var entrada = Math.floor(Math.random()*6)
	switch(entrada){
		case 0:
			return 'mosquito0'
		case 1:
			return 'mosquito1'
		case 2:
			return 'mosquito2'
		case 3:
			return 'mosquito3'
		case 4:
			return 'mosquito4'
		case 5:
			return 'mosquito5'
	}
}
function lado(){
	var entrada = Math.floor(Math.random()*2)
	switch(entrada){
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
	}
}

 function iniciarJogo(){
 	var nivel = document.getElementById('nivel').value
 	if(nivel === ''){
 		 alert('Selecione um nível de dificuldade')
 	} else {
 		switch(nivel){
 			case 'facil':
 				dificuldade = 2500
 				break
 			case 'normal':
 				dificuldade = 2000
 				break
 			case 'dificil':
 				dificuldade = 1000
 				break
 			case 'chucknorris':
 				dificuldade = 500
 				break
 		}
 		window.location.href = 'inicio.html?' + nivel
 	}
 }


