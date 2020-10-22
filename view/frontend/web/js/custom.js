var randomNumber = Math.floor(Math.random() * 50) + 1;
var numbers = [];

require([
	'jquery',
], function(jQuery){
	(function($) {
		'use strict';
		
		$(document).ready(function(){
			var input = $('#guess_number');
			var alert = $('.alert');
			
			var resultWin = $('.result-win');
			var strong = $('.result-win h3 strong');
			var resultSorry = $('.result-sorry');
			var resultText = $('.result-text');
			var ul = $('.result-win ul');
			
			
			
			// Init the modal
			initPopup();
			
			input.keypress(function (e) {
				//if the letter is not digit then don't type anything
				if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
				   	return false;
				}
				clearAlertAndMessage();
			});

			input.keyup(function (e) {
				if (e.which == 13 && !$('.guess-button').is(':disabled') ) {
					$('#guessNumberHandle').trigger('click');
				}
			});

			$('#guessNumberHandle').click(function(){
				
				var guessNumber = input.val();
				var messages = {
					'success' : 'Congratulations!',
					'require' : 'Sorry, You must write number between 1 and 50. Try Again..',
					'below' : 'Opps! The number entered was below the random number. Try Again..',
					'over' : 'Opps! The number entered was over the random number. Try Again..',
					'diff' : 'Sorry, You should guess number between 1 and 50. Try Again..'
				};
				var message = "";
				var isWin = false;
				
				if(guessNumber == "" || guessNumber == null) {
					alert.text('You must write number between 1 and 50!');
					return false;
				}
				
				if(guessNumber == randomNumber) {
					message = messages.success;
					isWin = true;
				}else if(guessNumber > 50){
					message = messages.diff;
				}else if(guessNumber < randomNumber){
					message = messages.below;
				}else if(guessNumber > randomNumber){
					message = messages.over;
				}

				resultText.text(message);
				numbers.push(guessNumber);
				if(isWin) {
					strong.text(randomNumber);
					var li = '';
					$(numbers).each(function( index ) {
						li += '<li>' + Number(index+1) + ': ' + numbers[index] + '</li>';
					});
					
					ul.html(li);
					resultWin.show();
					$('.guess-button').prop('disabled',true);
				}else{
					resultSorry.show();
				}
			});
		});
		
	})(jQuery);
});

function initPopup(){
	require([
		"jquery"
	], function($){
		
		var modal = $("#myModal");

		// Get the button that opens the modal
		var btn = $("#myBtn");

		// Get the <span> element that closes the modal
		var close = $(".close, #closeModal");
		

		// Get the start button in the modal
		var startBtn = $('#startHandle');
		
		// When the user clicks on the button, open the modal
		btn.click(function() {
			modal.show();
		});
		
		// When the user clicks on <span> (x), close the modal
		close.click(function() {
			modal.hide();
			clearAlertAndMessage();
			finish();
		});
		
		
		
		// When the user clicks anywhere outside of the modal, close it
		$(window).click(function(e) {
			if ($(e.target).attr('id') == 'myModal') {
				modal.hide();
				clearAlertAndMessage();
				finish();
			}
		});

		// Clear and start again to the game
		startBtn.click(function() {
			clearAlertAndMessage();
			finish();
		});
	});
}


function clearAlertAndMessage(){
	require([
		"jquery"
	], function($){
		
		var alert = $('.alert');
		var resultText = $('.result-text h2');
		var resultWin = $('.result-win');
		var resultSorry = $('.result-sorry');
		
		alert.text('');
		resultText.text('');
		resultWin.hide();
		resultSorry.hide();
		
	});
}

function finish(){
	require([
		"jquery"
	], function($){
		
		randomNumber = Math.floor(Math.random() * 50) + 1;
		numbers = [];
		var input = $('#guess_number');
		var ul = $('.result-win ul');
		var btn = $('.guess-button');
		var strong = $('.result-win h3 strong');
		input.val('');
		ul.html('');
		btn.prop('disabled',false);
		strong.text('');
		
	});
}





