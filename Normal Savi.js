var rand = Math.ceil(Math.random() * 100);
var turns = 0;
var guess;

document.getElementById('button').addEventListener('click', guess);
//alert(rand);

function unblock(){
document.getElementById('nextlvl').style.display='block';
}
function nxtlevl(){
location.href=('https://findsavi.github.io/SAVI%20ad-sb%20code.html');
}

function guess() {

var val = document.getElementById('textbox').value;
var reg = new RegExp('^[0-9]+$');
 if(!reg.test(val)){
 alert('Please Enter Only Numeric Values between 1 and 100');
 document.getElementById('textbox').value='';
 document.getElementById('textbox').focus();
 return false;
 }else if(val < 1 || val >= 100){
  alert('Value must be between 1 and 100');
  document.getElementById('textbox').value='';
  document.getElementById('textbox').focus();
  return false;
 }
 	
    guess = document.getElementById('textbox').value;
	
    if (guess == rand) {
		if(turns>6){
			document.getElementById('ans').innerHTML='Correct! It took you ' + turns + ' turns to guess the number!<br>Try to finish the game in less than 7 turns to go to next level.<br> Go for it.';
		
		}
		else if(turns<=6){
			document.getElementById('ans').innerHTML='Correct! It took you ' + turns + ' turns to guess the number!<br>You did it. Well done!';
		unblock();
		}
    } else if (guess < rand) {
		document.getElementById('ans').innerHTML='Your guess is to low. Try again.';
		document.getElementById('textbox').value='';
		document.getElementById('textbox').focus();        
		turns++;
    } else if (guess > rand) {
		document.getElementById('ans').innerHTML='Your guess is to high. Try again.';
		document.getElementById('textbox').value='';
		document.getElementById('textbox').focus();        
	    turns++;
    } else {
        alert('You didn\'t enter a number. Try again.');
		document.getElementById('textbox').value='';
		document.getElementById('textbox').focus();
    }
}

document.getElementById('reset').addEventListener('click', reset);

function reset() {
    rand = Math.ceil(Math.random() * 100);
    turns = 0;
    guess = null;
    document.getElementById('textbox').value = '';
    alert('The game has been reset!');
}
