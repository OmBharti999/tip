//document.write("<h1>Hi</h1>");


var bill = document.getElementById('BillAmount');

var tip = document.getElementById('Tip');

var nop = document.getElementById('Split');

function clear() {
    bill.value = "";
    tip.value = "";
    nop.value = "";
    document.getElementById("outputPart").style.display = "none";
    
}
function calculate() {
    let a = parseInt(bill.value);
    let b = parseInt(tip.value);
    let c = parseInt(nop.value);
    
    let tipx = a / c;
    tipx = (tipx * b) / 100;
    document.getElementById("outputPart").style.transition="3000ms"
    document.getElementById("outputPart").style.display = "inline";
    let d = document.getElementById('display1');
    let e = document.getElementById('display2');


    d.innerText = tipx;
    e.innerText = tipx + a; 
    console.log(bill.value);
}