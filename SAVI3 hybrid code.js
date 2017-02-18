var rand = Math.ceil(Math.random()*99);
var turns = 0;
var guess;
var y=0;

document.getElementById('button').addEventListener('click', guessN);
//alert(rand);
document.getElementById('reset').addEventListener('click', reset);
function reset() {
	document.getElementById("textbox").disabled = false;
	document.getElementById('textbox').value='';
	document.getElementById('textbox').focus();
    location.reload();	
}

function guessN()
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
var p=2, q=2;
var val = document.getElementById('textbox').value;
if(val < 1 || val >= 100){
alert('Value must be between 0 and 100');
return false;
}
 guess = document.getElementById('textbox').value;
 guess = parseInt(guess);
 //alert("turns " +turns);
 //console.log(' guess+10'+guess+" + 10 = "+(guess+10))
 if(turns==0){
    if (guess == rand) {
      
	document.getElementById('ans').innerHTML='Correct! It took you ' + turns + ' turns to guess the number! <br>Well done!<br>';
	
	   /* End the game*/
    } else {              
		t= guess + rand;
		//alert(" X1");
        if (t < 100){
		//alert("ifcalled X");
		y=guess+rand;
        document.getElementById('ans').innerHTML=('Opps! Wrong guess.<br> n is added with ' + guess+ ', find the resultant');
		document.getElementById('rest').innerHTML='You have to guess <b>resultant</b> number which falls in between 1 and 99.';
		document.getElementById('textbox').value='';
		document.getElementById('textbox').focus();         
		turns++;
            return y;                               
        }else{                     
           // alert(" X");
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
          //  alert(" xX"+y);
            return y;
        }     
		}
	} 	
  else{
		//alert("y default" + y);
        if (guess == y) {        
	if(turns>10){
			document.getElementById('ans').innerHTML='Correct! It took you ' + turns + ' turns to guess the number!<br>Try to finish the game in less than 10 turns to go to next level.<br> Go for it.';
		}
		else if(turns<=10){
			document.getElementById('ans').innerHTML='Correct! It took you ' + turns + ' turns to guess the number!<br>You did it. Well done!';
		}
		/* End the game*/      
		} else {
            s=y+guess;
			if(s<100){
			document.getElementById('ans').innerHTML=('Opps! Wrong guess.<br> Resultant is added with ' +guess+ ', find the new resultant');
            document.getElementById('rest').innerHTML='You have to guess <b>resultant</b> number which falls in between 1 and 99.';
			document.getElementById('textbox').value='';
			document.getElementById('textbox').focus();   
			y=guess+y;        
            turns++;
            //alert("y default s" + y);
                return y;                               
            }else {
            y=guess+y;
            while(y%q!=0)
            {
			q++;      
			}
			document.getElementById('ans').innerHTML=('Opps! Wrong guess.<br> ( ' + guess + ' + Resultant) is divided with '+q+', find the new resultant');
			y=y/q;        
			turns++;
            //alert("y default Ss" + y);
            return y;                              
			}    
		} 
	}
}