const nameInput = document.getElementById('name') as HTMLInputElement;
const doitButton = document.getElementById('doit') as HTMLInputElement;
const messageOutput = document.getElementById('message');

doitButton.addEventListener('click', function () {
    const enteredname = nameInput.value;
    messageOutput.innerText = enteredname.toUpperCase();
})