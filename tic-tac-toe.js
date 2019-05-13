	
//document.getElementsByTagName("body").setAttribute('onLoad','startGame()');

var firstMove = new Array ();

var secondMove = new Array ();

var WinningArr1 = new Array();

var WinningArr2 = new Array();


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
		firstMove.push(square.id);
		square.style.pointerEvents = 'none';
		console.log(firstMove);
		winningConditions();
	}else{
		
		secondMove.push(square.id);
		square.style.pointerEvents = 'none';
		console.log(secondMove);
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


function winningConditions(){
	var w1 = ['id00','id01','id02'];
	var w2 = ['id10','id11','id12'];
	var w3 = ['id20','id21','id22'];
	var w4 = ["id00", "id10", "id20"];
	var w5 = ["id01", "id11", "id21"];
	var w6 = ["id02", "id12", "id22"];
	var w7 = ["id00", "id11", "id22"];
	var w8 = ["id02", "id11", "id20"];

	if(firstMove.length >= 3){
		var x = 0;
		var y = 0;
		for( x = 0 ; x < 3; x++){ /////a,b,c
			{
				for ( y = 0 ; y < firstMove.length; y++){	////a,e,f,c,b,d
					if((w1[x]) == firstMove[y]){
						console.log("w1[x]"+w1[x]);
						console.log("firstMove[y]"+firstMove[y]);
						console.log("One match found");
						WinningArr1.push(firstMove[y]);
						var unique1 = WinningArr1.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
						WinningArr1 = unique1;
						console.log("WinningArr1"+WinningArr1);	
						if(WinningArr1.length == 3){
							console.log("WinningArr1.length"+WinningArr1.length);
							console.log('WinningArr1'+WinningArr1);
							alert("Player one is the winner loop 1");
							break;
						}
						break;
						
					}else if ((w2[x]) == firstMove[y]){
						console.log("w2[x]"+w2[x]);
						console.log("firstMove[y]"+firstMove[y]);
						console.log("One match found");
						WinningArr2.push(firstMove[y]);
						var unique2 = WinningArr2.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
						WinningArr2 = unique2;
						console.log("WinningArr2"+WinningArr2);
						if(WinningArr2.length == 3){
							console.log('WinningArr2'+WinningArr2)
							alert("Player one is the winner loop 2");
							break;
						}
						break;	
					}else{
						console.log("firstMove[y] in else loop"+firstMove[y]);
						console.log("No match found");
						
					}	
				}
				
				
			}
		}
		console.log("Nothing matching found");
	}
}

