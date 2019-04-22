function processData(input) {
    //Enter your code here
    var lines = input.split('\n');
    var chars = parseInt(lines[0].trim(), 10);
    var text = lines[1].trim();
    var shift = parseInt(lines[2].trim(), 10) % 26;
    var output = "";



    for (var i = 0; i < chars; i++) {
        var character = text.charCodeAt(i);
        if (character >= 65 && character <= 90) {
            character += shift;
            if (character > 90) {
                character = 64 + (character - 90);
            }
        } else if (character >= 97 && character <= 122) {
            character += shift;
            if (character > 122) {
                character = 96 + (character - 122);
            }
        }
        output += String.fromCharCode(character);
    }
    process.stdout.write(output + "\n")
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;

});

process.stdin.on("end", function () {
    processData(_input);

});