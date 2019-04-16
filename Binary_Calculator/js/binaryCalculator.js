 btn0.onclick = function () {
    res.innerHTML += 0; 
 };
 btn1.onclick = function () {
   res.innerHTML += 1;  
 };
 btnClr.onclick = function () {
   res.innerHTML = '';  
 };
 btnSum.onclick = function () {
     if (!re(res.innerHTML)) {
         res.innerHTML += '+';
     }
 }
 btnSub.onclick = function () {
     if (!re(res.innerHTML)) {
         res.innerHTML += '-';
     }
 }
 btnMul.onclick = function () {
     if (!re(res.innerHTML)) {
         res.innerHTML += '*';
     }
 }
 btnDiv.onclick = function () {
     if (!re(res.innerHTML)) {
         res.innerHTML += '/';
     }
 }
 btnEql.onclick = function () {
     let resString = res.innerHTML;
     let operands = getOperands(resString);
     if (operands.length < 2) {
         return;
     }
     let operator = getOperator(resString);
     let parsed = eval(parseInt(operands[0], 2) + operator + parseInt(operands[1], 2));
     parsed = Math.floor(parsed);
     res.innerHTML = parsed.toString(2);
 }
 let getOperator = function (string) {
     const regex = /[^-+*/]/g;
     return string.split(regex).join('');
 }
 let getOperands = function (string) {
     const regex = /[-+*/]/g;
     return string.split(regex).filter(String);
 }
 let re = function (string) {
     const regex = /[-+*/]/g;
     if (regex.test(string) || res.innerHTML === '') {
         return true;
     } 
 }  