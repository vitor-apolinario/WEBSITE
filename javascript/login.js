document.getElementById("form-login").onsubmit = validaLogin;

function validaLogin(){
	var contErro = 0;

	//valida email
	var email = document.getElementById("email");
	var erro_email = document.getElementById("msg-email");
	if((email.value == "") || (email.value.indexOf("@") == -1)){
		erro_email.innerHTML = "Por favor digite o E-mail";
		erro_email.style.display = 'block';
		contErro+=1;
	}
	else{
		erro_email.style.display = 'none';
	}


	// validação do campo senha
	var senha = document.getElementById("senha");
	var erro_senha = document.getElementById("msg-senha");
	if(senha.value == ""){
		erro_senha.innerHTML = "Por favor digite a Senha";
		erro_senha.style.display = 'block';
		contErro+=1;
	}
	else if (senha.value.length < 6){
		erro_senha.innerHTML = "A Senha deve possuir pelo menos 6 caracteres";
		erro_senha.style.display = 'block';
		contErro+=1;
	}
	else{
		erro_senha.style.display = 'none';
	}

	// validação da repetição da senha

	if(contErro > 0)
		return false;
	else{
		window.open("fretes.html","_self");
		return false;
	}
}