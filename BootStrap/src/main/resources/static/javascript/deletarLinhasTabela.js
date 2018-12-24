function botaoDeletar(event){
	event.preventDefault();
	console.log(event.target.className);

	if(event.target.className == "delete"){
		event.target.parentNode.parentNode.classList.add("apagarDevagar");
		setTimeout(function(){
			event.target.parentNode.parentNode.remove();
		},800)
	}
}
