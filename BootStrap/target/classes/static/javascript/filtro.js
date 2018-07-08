function filtroNomes (){
	var listaTrPacientes = 	document.querySelector(".table").querySelectorAll(".paciente");
	
	for(var i = 0; i < listaTrPacientes.length ; i++){
		var pacienteNome = listaTrPacientes[i].querySelector(".info-nome").textContent;
		var expressao = new RegExp(this.value, "i")
		if(expressao.test(pacienteNome)){
			listaTrPacientes[i].classList.remove("invisivel");
		}else{
			listaTrPacientes[i].classList.add("invisivel");
		}
		if(this.value == null){
			trPaciente.classList.remove("invisivel");
		}
	}
}

