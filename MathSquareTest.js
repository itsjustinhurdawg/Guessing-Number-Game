--HTML--
<p>A:</p>
<input type="text" id= "a"></input>
<p>B:</p>
<input type="text" id= "b"></input>
<p id = "C">C:</p>
<button onclick="myFunction()"> Show C</button>

--JAVASCRIPT--
function myFunction(){
var a = document.getElementById('a').value;

var b = document.getElementById('b').value;

var c = Math.sqrt(Math.pow([a],2) +Math.pow([b],2));
document.getElementById('C').innerHTML = "C: "+c;
};
