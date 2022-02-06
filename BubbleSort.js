console.log('START');
let x, y, sep, sortedA, sortedB;

/* Build 2 arrays and store them into x, y */
x = buildRandomArray();
y = buildRandomArray();

sep = '\n' + '=============== ===============' + '\n';

/* This function will build a new array each time it is called. Try calling it inside of a sort function. */
function buildRandomArray(a) {
    let multi = Math.floor((Math.random()*10)+10); /* Defines how many elements arrays will have. */
    a = Array(multi).fill().map(() => Math.round(Math.random() * multi));
    return a;
}

function bubbleSort(a) {
    for (let i = 0; i < a.length - 1; i++) {
        for (let j = 0; j < a.length - 1 - i; j++){
            if (a[j] > a[j+1]) {
                const temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }
    return a;
}

function destructureBubbleSort(a) {
    for (let i = 0; i < a.length - 1; i++) {
        for (let j = 0; j < a.length - 1 - i; j++){
            if (a[j] > a[j+1]) {
                [a[j], a[j+1]] = [a[j+1], a[j]];
            }
        }
    }
    return a;
}

function arrayLengthEvenOdd(remainder) {
    if (remainder.length % 2 == 1) {
        return " This array is odd. ";
    } else if (remainder.length % 2 == 0) {
        return " This array is even. ";
    }

}

/* Next 2 lines will call buildRandomArray and then bubble sort them. The sorted arrays should be different. */
function msg(){
    console.log(sep+'1st array. Length:'+x.length+ arrayLengthEvenOdd(x) + '\n' + x + '\n\n'+ y +'\n2nd array. Length:'+y.length+ arrayLengthEvenOdd(y) +sep+'\n');
    console.log(sep+'1st buildRandomArray iteration sorted \n' + destructureBubbleSort(x) + '\n\n' + destructureBubbleSort(y) + '\n2nd buildRandomArray iteration sorted \n' + sep);

}

msg()

console.log('END');