var displaybuffer = "";
var numero ="";
var termos = [undefined,undefined,undefined];
var resultado = undefined
var FKeyPad = document.Keypad;

function pressNum(num){
	numero = numero.concat(num.innerHTML)
	showDisplay(num.innerHTML)

}	
function pressOperator(op){
	if(termos[1]==undefined){
		termos[0]= numero;
		termos[1] = op.innerHTML
		showDisplay(op.innerHTML)
		numero="";
	}
	
}
function pressPI(op){
	
	if(termos[0]==undefined){
		termos[0]= numero;
		termos[1] = 3.14
		showDisplay("π")
		resultado = Number(termos[0])*Number(termos[1])
	}
	
}
function pressAlter(op){
	if(termos[0]==undefined){
		termos[0]= numero;
		termos[1] = op.innerHTML
		showDisplay(op.innerHTML)
		numero="";
	}
	var keepresultado
	if(termos[0] < 0){
		resultado = numero
	}else{
		resultado = '-' + termos[0]
	}
	if(termos[2] < 0){
		resultado = numero
	}else{
		switch(termos[1]){
			case "+":
				resultado = Number(termos[0])+('-' + numero)
			break
			case "-":
				resultado = Number(termos[0])-('-' + numero)
			break
			case "*":
				resultado = Number(termos[0])*('-' + numero)
			break
			case "/":
				resultado = Number(termos[0])/('-' + numero)
			break
		}
	}
	keepresultado = resultado
	clearDisplay();
	showDisplay(resultado)
	clear()
	numero = keepresultado.toString()
}

function pressEqual(){
	if(termos[0] != undefined && termos[1] != undefined ){
		termos[2]=numero
		var keepresultado
		switch(termos[1]){
			case "+":
				resultado = Number(termos[0])+Number(termos[2])
			break
			case "-":
				resultado = Number(termos[0])-Number(termos[2])
			break
			case "*":
				resultado = Number(termos[0])*Number(termos[2])
			break
			case "/":
				resultado = Number(termos[0])/Number(termos[2])
			break
			case "%":
				resultado = Number(termos[0])/100*Number(termos[2])
			break
		}
	
		keepresultado = resultado
		clearDisplay();
		showDisplay(resultado)
		clear()
		numero = keepresultado.toString()
	}		
}
function clear(){
	numero = "";
	termos = [undefined,undefined,undefined];
	resultado = undefined

}
function clearDisplay(){
	displaybuffer = ""
	var tela = document.getElementById("display")
	tela.value = displaybuffer
	
}
function clearAll(){
	clear()
	clearDisplay()
}
function showDisplay(conteudo){
	displaybuffer = displaybuffer.concat(conteudo)
	var tela = document.getElementById("display")
	tela.value = displaybuffer
}

