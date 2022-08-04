

function addValue() {
    // get the operands value

    // parse to integer. You can use: parseInt(input, 10);

    // perform operation

    // creating the text output

    // (if you want to check) print out in console

    // change the text area

    // document.mycalculator.output.value= text;
    let a = document.querySelector('#input_a').value;
    let b = document.querySelector('#input_b').value;

    let result = parseInt(a) + parseInt(b);

    document.mycalculator.output.value = a + "+" + b + "=" + result;


}


function mulValue() {
    let a = document.querySelector('#input_a').value;
    let b = document.querySelector('#input_b').value;

    let result = parseInt(a) * parseInt(b);

    document.mycalculator.output.value = a + "*" + b + "=" + result;
}

function divValue() {
    let a = document.querySelector('#input_a').value;
    let b = document.querySelector('#input_b').value;

    let result = parseInt(a) / parseInt(b);

    document.mycalculator.output.value = a + "/" + b + "=" + result;
}
