/* Include this (JQuery): <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"> */
/* And potentially this (JQuery UI): <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>*/
$(document).ready(function() {
	
	var numGrid = 5;							//grid size
	var maxWidth = 960;
	var boxjq = $('.box');						//cache the box typecast 
	var container$ = $('.container');			//same for container
			

	function buildGrid(num) {
		var boxbox = [];						//array to store boxes we create
		var size = Math.floor(maxWidth / num);
		container$.off();
		container$.html('');

		container$.css('width', num * size);
		
		for (i = 0; i < num*num; i++) {		//creation of the boxes and storing in boxbox
			boxbox[i] = "<div class='box' style='width:" + size+"px; height:" + size+"px;'></div>";
		}

		container$.append(boxbox);
		
		container$.css('width', num * size);
		$('.box').css({width: size, height: size});
	}

	function rebuild() {
		var input = prompt("Grid Length (1-64):");
		if (isNaN(input) || input < 1 || input > 64) {
			buildGrid(3);
		} else {
			buildGrid(input);
		}
		handle();

	};

	
	

	$('#reset').click(function() {
		rebuild();
	});

	var handle = function() {
		$('.box').on('mouseenter', function() {
			$(this).addClass('highlighted');
			$(this).removeClass('faded');
		});

		$('.box').on('mouseleave', function() {
			$(this).removeClass('highlighted');
			$(this).addClass('faded');
		});
	};

	buildGrid(numGrid);	
	handle();
		
});