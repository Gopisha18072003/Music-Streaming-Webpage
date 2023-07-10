var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);

function openNav() {
    document.getElementById("mySide").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySide").style.width = "0";
  }
const d = new Date();

document.getElementById("year").innerHTML = d.getFullYear();