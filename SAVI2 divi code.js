var rand = Math.ceil(Math.random()*99);
var turns = 0;
var guess;
var y=0;
var i=1;

document.getElementById('button').addEventListener('click', guessNum);
//alert(rand);

function unblock()
{
document.getElementById('demo').style.display='block';
document.getElementById('txt').style.display='block';
document.getElementById('sub').style.display='block';
document.getElementById('txt').value="";
document.getElementById('txt').focus();
}
function findn()
{
var k=document.getElementById('txt').value;
k=parseInt(k);
if(i==1 || i==2)
 {
  if(k==rand)
   {
	alert("Correct!" )
    document.getElementById('nextlvl').style.display='block';
   }
  else
   {
	alert("So far so good.Try again, you have one more chance.");
	document.getElementById('txt').value='';
	document.getElementById('txt').focus();
	i++;
 return i;
   }
 }
 else
 {
	alert("You are failed to find 'n'. Play again");
	document.getElementById('playagn').style.display='block';
 }
}
function reloading() {
    location.reload();
}
function nxtlevl(){
location.href=('findsavi.github.io/SAVI3 hybrid code.js');
}
function guessNum() 
{
 var val = document.getElementById('textbox').value;
 var reg = new RegExp('^[0-9]+$');
 if(!reg.test(val)){
 alert('Please Enter Only Numeric Values between 1 and 99');
 document.getElementById('textbox').value='';
 document.getElementById('textbox').focus();
 return false;
 }else if(val < 1 || val >= 100){
  alert('Please Enter Only Numeric Values between 1 and 99'); 
  document.getElementById('textbox').value='';
  document.getElementById('textbox').focus();
  return false;
 }
 var t,s;
 var p=2;
 var q=2;
 guess = document.getElementById('textbox').value;
 guess = parseInt(guess);
// alert(" turns"+turns);
 
 if(turns==0){
  if (guess == rand) {
	document.getElementById('ans').innerHTML='Correct! It took you ' + turns + ' turns to guess the number! <br>Well done!<br> Now submit <b>n</b> value to goto next level';
	document.getElementById("textbox").disabled = true;
	unblock();
    /* End the game*/
  } else {
   //alert(" X");
   y=guess+rand;
    while(y%p!=0){  
     p++;
    }
	document.getElementById('ans').innerHTML=('Opps! Wrong guess.<br> ( ' + guess + ' + n) is divided with '+p+', find the resultant');
	document.getElementById('rest').innerHTML='You have to guess <b>resultant</b> number which falls in between 1 and 99.';
	document.getElementById('textbox').value='';
	document.getElementById('textbox').focus();
    turns++;
    y=y/p;
 //   alert(" xX"+y);
    return y;
 }
}
else{
  //alert("y default" + y);
  if (guess == y) {
	document.getElementById('ans').innerHTML='Correct! It took you ' + turns + ' turns to guess the number! <br>Well done!<br> Now submit <b>n</b> value to goto next level';
	document.getElementById("textbox").disabled = true;
	unblock();
 /* End the game*/ 
  } else {
  y=guess+y;
  while(y%q!=0)
  {  
  q++;
  }
  
    document.getElementById('ans').innerHTML=('( ' + guess + ' + resultant) is divided with '+q+', find the new resultant');
	document.getElementById('rest').innerHTML='You have to guess <b>resultant</b> number which falls in between 1 and 99.';
	document.getElementById('textbox').value='';
	document.getElementById('textbox').focus();
    y=y/q;
    turns++;
  //  alert("y default Ss" + y);
  return y;  
}
}
}
document.getElementById('reset').addEventListener('click', reset);
function reset() {
	document.getElementById("textbox").disabled = false;
	document.getElementById('textbox').value='';
	document.getElementById('textbox').focus();
    location.reload();	
}