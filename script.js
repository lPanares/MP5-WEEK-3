const txtInput = document.querySelector('#txtInput');
const btnCheck = document.querySelector('#btnCheck');
const txtOutput = document.querySelector('#txtOutput');

btnCheck.addEventListener('click', function() {
    const email = txtInput.value.trim();
    if (email.includes('@')) {
        txtOutput.textContent = "Valid";
    } else {
        txtOutput.textContent = "Invalid";
    }
});
