process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}
function main() {
    var S = readLine();
    var strArr = S.split('');
    var chk = ['S','O','S'];
   var change = strArr.reduce(function(x,y,i){
      if(y !== chk[i%3]){
          return x+1;
      }else{
          return x;
      }
   },0);
 console.log(change);
}