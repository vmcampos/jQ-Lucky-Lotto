			var startNum = 0;
			var allNums = [];
			function numLottoPick(){
				var numLottoHowMany = document.getElementById("numLottoHowManyInput").value;
				var numLottoMax = document.getElementById("numLottoMaxInput").value;
				while(numLottoHowMany > 0) {
					var newRand = Math.ceil(Math.random() * numLottoMax);
					allNums.push(newRand);
					document.getElementById("numLottoMsg").style.display = "block";
					document.getElementById("numLottoResult").innerHTML = allNums;
					numLottoHowMany--;
				}
			}
			function resetLotto() {
				document.getElementById("numLottoHowManyInput").value = "";
				document.getElementById("numLottoMaxInput").value = "";
				document.getElementById("numLottoMsg").style.display = "none";
				document.getElementById("numLottoResult").innerHTML = "";
			}