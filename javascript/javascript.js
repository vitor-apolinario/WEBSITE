/*fecha o menu quando carrega a página*/
window.onload = function(){
	var menu=document.getElementsByClassName("menu-opcoes")[0];
	var header=document.getElementsByClassName("c1")[0];

	if(menu.style.display=='none'){
		menu.style.display='block';
		header.style.height='200px';
	}else{
		menu.style.display='none';
		header.style.height='65px';
	}
}

/*fecha/abre o menu de acordo com o click no hamburger*/
document.getElementById("controle-menu").onclick = function(){	
	var menu=document.getElementsByClassName("menu-opcoes")[0];
	var header=document.getElementsByClassName("c1")[0];

	if(menu.style.display=='none'){
		menu.style.display='block';
		header.style.height='200px';
	}else{
		menu.style.display='none';
		header.style.height='65px';
	}
};