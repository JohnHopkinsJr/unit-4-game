
// Variables

var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["./assets/images/pCrystal.png", "./assets/images/rCrystal.png", "./assets/images/bCrystal.png", "./assets/images/gCrystal.png"];

// Functions

	function randomTargetNumber () {
		targetNumber = (Math.floor(Math.random() * 100) + 3);
	}

	function resetCrystals () {
		for (var i = 0; i < images.length; i++) {
			var crystal = $("<img>");
			crystal.addClass("crystal");
			crystal.attr("src", images[i]);
			crystal.attr("value", (Math.floor(Math.random() * 21 + 1)));
			crystal.attr("height", "90");
			$(".crystal-images").append(crystal);
		}
	}

	function resetHTML () {
		$(".target-number").html(targetNumber);
		$(".win-counter").html("Wins: " + wins);
		$(".lose-counter").html("Losses:  " + losses);
		$(".score-number").html(counter);
		$(".crystal-images").empty();
		
	}

	function resetGame () {
		randomTargetNumber ();
		counter = 0;
		resetHTML ();
		resetCrystals ();
	}


// Click Functions
	function crystalClick () {
		counter += parseInt($(this).attr("value"));
		$(".score-number").html(counter);
		if (counter == targetNumber) {
			wins++;
			resetGame();
		}
		else if (counter > targetNumber) {
			losses++;
			resetGame();
		};
	};


	$(document).on("click", ".crystal", crystalClick);

randomTargetNumber();
resetHTML ();
resetCrystals ();