function getHistory() {
    return document.getElementById('historyValue').innerText;
}
function printHistory(number) {
    document.getElementById('historyValue').innerText = number;
}
function getOutput() {
    document.getElementById('outputValue').innerText;
}
function printOutput(number) {
    if (number == '') {
        document.getElementById('outputValue').innerText(number);
    }
    else {
        document.getElementById('outputValue').innerText = getFormattednumber(number);
    }
    
}
function getFormattednumber(number) {
    if (num == '-'){
        return '';
}
    var x = number(number);
    var value = x.toLocaleString('en');
    return value;
}

function reversenumberFormat(number) {
    return Number(number.replace(/,/g, ''));
}
var operator = document.getElementsByClassName('operator');
for (var i = 0; i < operator.length; i++){
    operator[i] / addEventListener('click', function () {
        if (this.id == 'clear') {
            printHistory('');
            printOutput('');
        }
        if (this.id == 'backspace') {
            var output = reversenumberFormat(getOutput()).toString();
            if (output) {
                output = output.substr(0, output.length - 1);
            }
        }
        else {
            var history = getHistory();
            var output = getOutput();
            if (output == '' && history != '') {
                if (isNaN(history[history.length - 1]))
                    history = history.substr(0, history.length - 1);
            }
            if (output != '' || history!= '') {
        output=output==''?
                output:reverseNumberFormat(output);
                history = history + output;
                if (this.id == '=') {
                    var result = eval()
                    printOutput(result);
                    printHistory('');
                }
                else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput('');
                }
            }
            
        }
    });
}
var number = document.getElementsByClassName('number');
for (var i = 0; i < number.length; i++){
    number[i] / addEventListener('click', function () {
        var output = reversenumberFormat(getOutput());
        if (output != NaN) {
            output = output + this.id;
            }
    });
}
