	
//document.getElementsByTagName("body").setAttribute('onLoad','startGame()');

var firstMove = new Array ();

var secondMove = new Array ();


	var tbl = document.createElement('table');
	tbl.setAttribute('border','1');
	tbl.style.width = '50%';
	tbl.style.height = '100%';
	tbl.style.borderSpacing = '0';
	tbl.setAttribute('onload','startGame()');

	document.getElementById('main_table').appendChild(tbl);

	for (var i = 0; i < 3; i++) {
		var tr = document.createElement('tr');
		tbl.appendChild(tr);
		for (var j = 0; j < 3; j++) {
			var td = document.createElement('td');
			td.style.width = '50px';
			td.style.height = '50px';
			td.style.fontSize = '40px';
			td.setAttribute('id','id'+i+j);
			td.setAttribute('onclick','nextMove(this)');
			tbl.appendChild(td);
		}
	}


function startGame(){
	document.turn = 'X';
}

function nextMove(square){
	square.innerText = document.turn;
	if(document.turn == 'X'){
		//console.log('XX'+square.id);
		firstMove.push(square.id);
		var idFstDis = square.id;
		console.log(idFstDis);
		console.log(document.getElementById(idFstDis)).disabled = true;
	}else{
		
		secondMove.push(square.id);
		var idScdDis = square.id;
		document.getElementById(square.id).disabled = true;
		console.log(document.getElementById(idScdDis));
	}
	switchTurn();
}


function switchTurn (){
	if(document.turn == 'X'){
		document.turn = 'O';
	}else{
		document.turn = 'X';
	}
}

