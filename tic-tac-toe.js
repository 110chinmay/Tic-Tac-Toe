	
//document.getElementsByTagName("body").setAttribute('onLoad','startGame()');

var firstMove = new Array ();

var secondMove = new Array ();

var WinningArr1 = new Array();

var WinningArr2 = new Array();

var WinningArr3 = new Array();

var WinningArr4 = new Array();

var WinningArr5 = new Array();

var WinningArr6 = new Array();

var WinningArr7 = new Array();

var WinningArr8 = new Array();

var WinningArr9 = new Array();

var WinningArr10 = new Array();

var WinningArr11 = new Array();

var WinningArr12 = new Array();

var WinningArr13 = new Array();

var WinningArr14 = new Array();

var WinningArr15 = new Array();

var WinningArr16 = new Array();


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
		firstMove.unshift(square.id);
		square.style.pointerEvents = 'none';
		winningConditions();
	}else{
		
		secondMove.unshift(square.id);
		square.style.pointerEvents = 'none';
		winningConditions();
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
						WinningArr1.push(firstMove[y]);
						var unique1 = WinningArr1.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
						WinningArr1 = unique1;
						if(WinningArr1.length == 3){
							alert("Player one is the winner!!!");
							document.location.reload();
							break;
						}
						
					}if ((w2[x]) == firstMove[y]){
						WinningArr2.push(firstMove[y]);
						var unique2 = WinningArr2.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
						WinningArr2 = unique2;
						if(WinningArr2.length == 3){
							alert("Player one is the winner!!!");
							document.location.reload();
							break;
						}
					} if ((w3[x]) == firstMove[y]){
						WinningArr3.push(firstMove[y]);
						var unique3 = WinningArr3.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
						WinningArr3 = unique3;
						if(WinningArr3.length == 3){
							alert("Player one is the winner!!!");
							document.location.reload();
							break;
						}
					} if ((w4[x]) == firstMove[y]){
						WinningArr4.push(firstMove[y]);
						var unique4 = WinningArr4.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
						WinningArr4 = unique4;
						if(WinningArr4.length == 3){
							alert("Player one is the winner!!!");
							document.location.reload();
							break;
						}
					} if ((w5[x]) == firstMove[y]){
						WinningArr5.push(firstMove[y]);
						var unique5 = WinningArr5.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
						WinningArr5 = unique5;
						if(WinningArr5.length == 3){
							alert("Player one is the winner!!!");
							document.location.reload();
							break;
						}
					} if ((w6[x]) == firstMove[y]){
						WinningArr6.push(firstMove[y]);
						var unique6 = WinningArr6.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
						WinningArr6 = unique6;
						if(WinningArr6.length == 3){
							alert("Player one is the winner!!!");
							document.location.reload();
							break;
						}	
					} if ((w7[x]) == firstMove[y]){
						WinningArr7.push(firstMove[y]);
						var unique7 = WinningArr7.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
						WinningArr7 = unique7;
						if(WinningArr7.length == 3){
							alert("Player one is the winner!!!");
							document.location.reload();
							break;
						}
					}if ((w8[x]) == firstMove[y]){
						WinningArr8.push(firstMove[y]);
						var unique8 = WinningArr8.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
						WinningArr8 = unique8;
						if(WinningArr8.length == 3){
							alert("Player one is the winner!!!");
							document.location.reload();
							break;
						}
					}if((w1[x]) == secondMove[y]){
						WinningArr9.push(secondMove[y]);
						var unique9 = WinningArr9.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
						WinningArr9 = unique9;
						if(WinningArr9.length == 3){
							alert("Player two is the winner!!!");
							document.location.reload();
							break;
						}
						
					}if ((w2[x]) == secondMove[y]){
						WinningArr10.push(secondMove[y]);
						var unique10 = WinningArr10.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
						WinningArr10 = unique10;
						if(WinningArr10.length == 3){
							alert("Player two is the winner!!!");
							document.location.reload();
							break;
						}
					} if ((w3[x]) == secondMove[y]){
						WinningArr11.push(secondMove[y]);
						var unique11 = WinningArr3.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
						WinningArr11 = unique11;
						if(WinningArr11.length == 3){
							alert("Player two is the winner!!!");
							document.location.reload();
							break;
						}
					} if ((w4[x]) == secondMove[y]){
						WinningArr12.push(secondMove[y]);
						var unique12 = WinningArr12.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
						WinningArr12 = unique12;
						if(WinningArr12.length == 3){
							alert("Player two is the winner!!!");
							document.location.reload();
							break;
						}
					} if ((w5[x]) == secondMove[y]){
						WinningArr13.push(secondMove[y]);
						var unique13 = WinningArr13.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
						WinningArr13 = unique13;
						if(WinningArr13.length == 3){
							alert("Player two is the winner!!!");
							document.location.reload();
							break;
						}
					} if ((w6[x]) == secondMove[y]){
						WinningArr14.push(secondMove[y]);
						var unique14 = WinningArr14.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
						WinningArr14 = unique14;
						if(WinningArr14.length == 3){
							alert("Player two is the winner!!!");
							document.location.reload();
							break;
						}	
					} if ((w7[x]) == secondMove[y]){
						WinningArr15.push(secondMove[y]);
						var unique15 = WinningArr15.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
						WinningArr15 = unique15;
						if(WinningArr15.length == 3){
							alert("Player two is the winner!!!");
							document.location.reload();
							break;
						}
					}if ((w8[x]) == secondMove[y]){
						WinningArr16.push(secondMove[y]);
						var unique16 = WinningArr16.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
						WinningArr16 = unique16;
						if(WinningArr16.length == 3){
							alert("Player two is the winner!!!");
							document.location.reload();
							break;
						}
					}else{
						//console.log("firstMove[y] in else loop"+firstMove[y]);
						console.log("No match found");
						
					}	
				}
				
				
			}
		}
		console.log("Nothing matching found");
	}
}

