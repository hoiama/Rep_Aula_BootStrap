function geradorElementos(event) {
	event.preventDefault();
	var formulario = document.querySelector("#formulario");
	var paciente = coletarDadosFormulario(formulario);
	var trPaciente = gerarElementoTr(paciente);
	var listaErros = validadorPesoAltura(paciente, formulario);

	if(listaErros.length ==  0 ){
		var tabela = document.querySelector(".table-body");
		inserirPaiFilho(tabela, trPaciente);
		formulario.querySelector("#label-peso").classList.remove("paciente-invalido");
		formulario.querySelector("#label-altura").classList.remove("paciente-invalido");
		formulario.querySelector("#label-nome").classList.remove("paciente-invalido");
		formulario.reset();
		
	}
}

function coletarDadosFormulario(form) {
	var paciente = {
		nome : form.nome.value,
		email : form.email.value,
		peso : form.peso.value,
		altura : form.altura.value,
		gordura : form.gordura.value,
		imc : gerarIMC(form.peso.value, form.altura.value),
	}
	console.log("coletando dados formulario");
	return paciente;
}

function gerarElementoTr(paciente) {
	var trPaciente = criadorElementos("tr", "paciente");
	trPaciente.appendChild(criadorElementos("td", "info-nome", paciente.nome));
	trPaciente.appendChild(criadorElementos("td", "info-email", paciente.email));
	trPaciente.appendChild(criadorElementos("td", "info-peso", paciente.peso));
	trPaciente.appendChild(criadorElementos("td", "info-altura", paciente.altura));
	trPaciente.appendChild(criadorElementos("td", "info-gordura", paciente.gordura));
	trPaciente.appendChild(criadorElementos("td", "info-imc", paciente.imc));
	var tdBotao = criadorElementos("td", "info-delete", "");
	tdBotao.appendChild(criadorElementos("button", "delete", "x"));
	trPaciente.appendChild(tdBotao);
	return trPaciente;
}

function criadorElementos(elemento, classe, conteudo) {
	var Elemento = document.createElement(elemento);
	Elemento.classList.add(classe);
	Elemento.textContent = conteudo;
	return Elemento;
}

function inserirPaiFilho(pai, filho) {
	pai.appendChild(filho);
}





