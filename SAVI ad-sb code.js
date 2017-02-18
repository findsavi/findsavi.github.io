
var rand = Math.ceil(Math.random()*100);
var turns = 0;
var guess;
var y=0;
document.getElementById('button').addEventListener('click', guessN);
//alert(rand);

function unblock(){
document.getElementById('nextlvl').style.display='block';
}
function nxtlevl(){
location.href=('https://findsavi.github.io/SAVI2%20divi%20code.html');
}

function guessN()
{
var t,s;
var val = document.getElementById('textbox').value;
if(val < 1 || val >= 100){
alert('Value must be between 0 and 100');
return false;
}
 guess = document.getElementById('textbox').value;
 guess = parseInt(guess);
// alert("turns " +turns);
 //console.log(' guess+10'+guess+" + 10 = "+(guess+10))

if(turns==0)
{
 if (guess == rand)
 {
	document.getElementById('ans').innerHTML='Correct! It took you ' + turns + ' turns to guess the number! <br>Well done!';
	unblock();
 }
 else
 {
 t= guess + rand;
 //alert(" X1");
 if (t < 100)
  {
  //alert("ifcalled X");
	y=guess+rand;
	document.getElementById('ans').innerHTML=('Opps! Wrong guess.<br> Now n is added with '+guess+', find the resultant.');
	document.getElementById('rest').innerHTML='You have to guess <b>resultant</b> number which falls in between 1 and 99.';
	document.getElementById('textbox').value='';
	document.getElementById('textbox').focus();
	turns++;
  return y;  
  }
  else
{  //alert(" X");
  if(guess > rand && t>=100)
  {
	y=guess-rand;
	document.getElementById('ans').innerHTML=('Opps! Wrong guess.<br> '+guess+' is substracted with n, find the resultant.');
	document.getElementById('rest').innerHTML='You have to guess <b>resultant</b> number which falls in between 1 and 99.';
	document.getElementById('textbox').value='';
	document.getElementById('textbox').focus();
	turns++;
  //alert(" xX"+y);
  return y;
}
  else(rand > guess && t>=100)
  {
  y=rand-guess;
	document.getElementById('ans').innerHTML=('Opps! Wrong guess. <br>n is substracted with ' + guess+ ', find the resultant.');
	document.getElementById('rest').innerHTML='You have to guess <b>resultant</b> number which falls in between 1 and 99.';
	document.getElementById('textbox').value='';
	document.getElementById('textbox').focus();
	turns++; 
//alert(" xXx"+y);
  return y;  
  }
 }
 }
 return y;
}
else
{
//alert("y default" + y);
if (guess == y)
 {
		if(turns>10){
			document.getElementById('ans').innerHTML='Correct! It took you ' + turns + ' turns to guess the number!<br>Try to finish the game in less than 10 turns to go to next level.<br> Go for it.';
		}
		else if(turns<=10){
			document.getElementById('ans').innerHTML='Correct! It took you ' + turns + ' turns to guess the number!<br>You did it. Well done!';
			unblock();
		}
/* End the game*/ 
 }
 else if(guess != y)
 {
 s=y+guess;
 if(s<100)
  {
	document.getElementById('ans').innerHTML=('Opps! Wrong guess.<br>Resultant is added with ' +guess+ ', find the new resultant.');
	document.getElementById('rest').innerHTML='You have to guess <b>resultant</b> number which falls in between 1 and 99.';
	document.getElementById('textbox').value='';
	document.getElementById('textbox').focus();
	y=guess+y;
	turns++;
  //alert("y default s" + y);
  return y;  
  }
  else if(y > guess && s>=100)
  {
	document.getElementById('ans').innerHTML=('Opps! Wrong guess.<br>Resultant is substracted with ' + guess+ ', find the new resultant.');
	document.getElementById('rest').innerHTML='You have to guess <b>resultant</b> number which falls in between 1 and 99.';
	document.getElementById('textbox').value='';
	document.getElementById('textbox').focus();
	y=y-guess;
	turns++;
  //alert("y default Ss" + y);
  return y;  
}
  else(guess > y && s>=100)
  {
	document.getElementById('ans').innerHTML=('Opps! Wrong guess.<br>'+guess + ' is substracted with resultant, find the new resultant.');
	document.getElementById('rest').innerHTML='You have to guess <b>resultant</b> number which falls in between 1 and 99.';
	document.getElementById('textbox').value='';
	document.getElementById('textbox').focus();
	y=guess-y;
	turns++;
//alert("y default sSs" + y);  
return y;     
  }
}
}
}
document.getElementById('reset').addEventListener('click', reset);

function reset() {
    location.reload();
}