console.log("hellow world");

console.log(  document.getElementById("field1").value  );
document.getElementById("myButton").onclick = function() {
        document.getElementById("word01").innerHTML = document.getElementById("field1").value;
    document.getElementById("story").style.display = "block";
    }