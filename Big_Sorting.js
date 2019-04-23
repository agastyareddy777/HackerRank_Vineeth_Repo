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
    var n = parseInt(readLine());
    var unsorted = [];
    for (var unsorted_i = 0; unsorted_i < n; unsorted_i++) {
        unsorted[unsorted_i] = readLine();
    }
    function quickSort(arr, i, j) {
        function swap(arr, i, j) {
            var tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
        function partition(arr, i, j) {
            var pivot = arr[Math.floor((i + j) / 2)];
            while (i <= j) {
                while (parseInt(arr[i], 10) < pivot) {
                    i++;
                }
                while (parseInt(arr[j], 10) > pivot) {
                    j--;
                }
                if (i <= j) {
                    swap(arr, i, j);
                    i++;
                    j--;
                }
            }
            return i;
        }
        if (arr.length > 1) {
            var partitionIdx = partition(arr, i, j);
            if (i < partitionIdx - 1) {
                quickSort(arr, i, partitionIdx - 1);
            }
            if (partitionIdx < j) {
                quickSort(arr, partitionIdx, j);
            }
        }
        return arr;
    }
    unsorted = quickSort(unsorted, 0, unsorted.length - 1);
    for (var i = 0; i < unsorted.length; i++) {
        console.log(unsorted[i]);
    }

}