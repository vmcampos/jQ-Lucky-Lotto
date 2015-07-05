/* 
	Name: vmcampos <vmcampos@vmcampos.com>
	Project: VmC jQ Lucky Lotto
	Version: 2015.07.04
*/

var startNum = 0;
var allNums = [];

function numLottoPick(){
	var numLottoHowMany = document.getElementById("numLottoHowManyInput").value;
	var numLottoMax = document.getElementById("numLottoMaxInput").value;

	if(numLottoHowMany == "" || numLottoMax == "" || numLottoHowMany == 0 || numLottoMax == 0) {
		document.getElementById("numLottoMsg").style.display = "block";
		document.getElementById("numLottoResult").style.display = "block";
		document.getElementById("numLottoMsg").innerHTML = "Select how many you want";
		document.getElementById("numLottoResult").innerHTML = "Select the maximum number";
		document.getElementById("numLottoHowManyInput").value = "";
		document.getElementById("numLottoMaxInput").value = "";
	} else {
		while(numLottoHowMany > 0) {
			var newRand = Math.ceil(Math.random() * numLottoMax);
			allNums.push(" " + newRand);
			document.getElementById("numLottoMsg").style.display = "block";
			document.getElementById("numLottoResult").style.display = "block";
			document.getElementById("numLottoMsg").innerHTML = "Your lucky numbers are";
			document.getElementById("numLottoResult").innerHTML = allNums;
			numLottoHowMany--;
		}
	}
	document.getElementById("numLottoHowManyInput").value = "";
	document.getElementById("numLottoMaxInput").value = "";
}

function resetLotto() {
	allNums = [];
	document.getElementById("numLottoHowManyInput").value = "";
	document.getElementById("numLottoMaxInput").value = "";
	document.getElementById("numLottoMsg").style.display = "none";
	document.getElementById("numLottoResult").style.display = "none";
	document.getElementById("numLottoResult").innerHTML = "";
}