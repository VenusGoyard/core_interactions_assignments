console.log("hellow world");

console.log(  document.getElementById("field1").value  );
document.getElementById("button1").onclick = function() {
        document.getElementById("word01").innerHTML = document.getElementById("field1").value;
    document.getElementById("story").style.display = "block";
    }

console.log(  document.getElementById("field2").value  );
document.getElementById("button2").onclick = function() {
        document.getElementById("word02").innerHTML = document.getElementById("field2").value;
    document.getElementById("story").style.display = "block";
        }

console.log(  document.getElementById("field3").value  );
document.getElementById("button3").onclick = function() {
        document.getElementById("word03").innerHTML = document.getElementById("field3").value;
    document.getElementById("story").style.display = "block";
                }