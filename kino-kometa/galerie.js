function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}

function myFunction1() {
    var x = document.getElementById('filmy1');
    var y = document.getElementById('filmy2');
    x.style.display = "block";
    y.style.display = "none";
}

function myFunction2() {
    var x = document.getElementById('filmy1')
    var y = document.getElementById('filmy2');
    x.style.display = "none"
    y.style.display = "block";
}

function myFunction3() {
    var x = document.getElementById('filmy1');
    var y = document.getElementById('filmy2');
    var t = document.getElementById('tlacitka');
    var t2 = document.getElementById('tlacitka2');
    x.style.display = "block";
    y.style.display = "none";
    t.style.display = "block";
    t2.style.display = "none";
}

function myFunction4() {
    var x = document.getElementById('filmy1')
    var y = document.getElementById('filmy2');
    var t = document.getElementById('tlacitka');
    var t2 = document.getElementById('tlacitka2');
    x.style.display = "none";
    y.style.display = "block";
    t.style.display = "none";
    t2.style.display = "block";
}

