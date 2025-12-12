const txtInput = document.querySelector('#txtInput');
const btnCount = document.querySelector('#btnCount');
const txtOutput = document.querySelector('#txtOutput');

btnCount.addEventListener('click', function(){
    let input = txtInput.value;
    txtOutput.textContent = input.trim().length;
});
