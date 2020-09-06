var btn = document.getElementsByTagName("button");

btn[0].onclick = inputShow;


function inputShow() {
    var input = document.getElementsByClassName("text");
    var value = input[0].value;
    if (value == "google") {
        setTimeout(function () {
            alert("Yandex круче. Но это не точно");
        }, 3000)
    } else
        setTimeout(function () {
            alert(value + " " + massPerson[0].name);
        }, 3000)
}



var massPerson = [{
        name: "viktor",
        age: 24
    },
    {
        name: "Alex",
        age: 14
    },
    {
        name: "Max",
        age: 20
    },
];


function superSum(a, b) {
    return a + b;
}

console.log("Сумма элементов  = ", superSum(2, 2));

var mass2 = [22, 6, 0, 100, 1250, -1];
var max = mass2[0];
for (var i = 0; i < mass2.length; i++) {

    if (mass2[i] > max)
        max = mass2[i];
}
console.log("Максимальный элемет массива = ", max);

var min = mass2[0];
for (var i = 0; i < mass2.length; i++) {

    if (mass2[i] < min)
        min = mass2[i];
}
console.log("Минимальный элемет массива = ", min);


var a = "xxx";
var b = "yyy";
var c = a;
a = b;
b = c;
console.log(a);
console.log(b);


function findMax(numArray) {
    var max = mass2[0];
    for (var i = 0; i < numArray.length; i++) {

        if (numArray[i] > max)
            max = numArray[i];
    }
    return max;
}

console.log(findMax([5, -2, 67, 0, 145, -6]));