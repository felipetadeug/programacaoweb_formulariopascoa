function inserirElemento(){
	var clone = document.getElementById('origem').cloneNode(true);
	var destino = document.getElementById('destino');
	destino.appendChild (clone);
	var camposClonados = clone.getElementsByTagName('input');
	for(i=0; i<camposClonados.length;i++){
		camposClonados[i].value = '';
	}
}
function removerElementos(id){
	var destinoRemover = document.getElementById('destino');
	destinoRemover.removeChild(destinoRemover.childNodes[0]);
}

