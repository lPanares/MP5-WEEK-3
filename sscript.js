const txtInput = document.querySelector('#txtInput');
const btnCount = document.querySelector('#btnCount');
const txtOutput = document.querySelector('#txtOutput');

btnCount.addEventListener('click', function() {
    const input = txtInput.value;
    const trimmed = input.trim();
    const count = trimmed.length;
    txtOutput.textContent = count;
});