//document.write("<h1>Hi</h1>");


var bill = document.getElementById('BillAmount');

var tip = document.getElementById('Tip');

var nop = document.getElementById('Split');

let d = document.getElementById('display1');
let e = document.getElementById('display2');



function clear() {
    bill.value = 0;
    tip.value = 0;
    nop.value = 1;
    document.getElementById("outputPart").style.display = "none";
    f.innerText = 0;
    g.innerText = 0;
    
}

f.style.display = "none";
g.style.display = "none"
function calculate() {
    let a = parseInt(bill.value);
    let b = parseInt(tip.value);
    let c = parseInt(nop.value);
    
    let tipx = a / c;
    tipx = (tipx * b) / 100;
    document.getElementById("outputPart").style.transition="3000ms"
    document.getElementById("outputPart").style.display = "inline";

   
   
   
        d.innerText = Math.round(tipx);
        e.innerText = Math.round(tipx + a);
       
       
    console.log(bill.value);
}