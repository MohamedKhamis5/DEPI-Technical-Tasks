var answerInput = document.getElementById('Answer');
function EnterNumber(val) {
    answerInput.value += val;
}
function EnterOperator(operator) {
    answerInput.value += operator;
}
function EnterClear() {
    answerInput.value = '';
}
function EnterEqual() {
    if (answerInput.value !== '') {
        answerInput.value =  Function('return ' + answerInput.value)();
    }
}