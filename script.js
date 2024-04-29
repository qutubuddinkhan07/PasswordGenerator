// inputRange - inputNumber
document.addEventListener("DOMContentLoaded", function()
{
    var rangeInput = document.getElementById("length");
    var numberInput = document.getElementById("numberInput");

    numberInput.value = rangeInput.value;

    rangeInput.addEventListener("input", function(){
        numberInput.value = rangeInput.value;
    });
    numberInput.addEventListener("input", function(){
        var value = parseInt(numberInput.value);

        if(value < parseInt(rangeInput.min)){
            value = parseInt(rangeInput.min);
        } else if(value > parseInt(rangeInput.max)){
            value = parseInt(rangeInput.max);
        }
        rangeInput.value = value;
        numberInput.value = value;
    });
});

//to generate
document.getElementById('generate').addEventListener('click', function () {
    var length = parseInt(document.getElementById('length').value);
    var uppercase = document.getElementById('uppercase').checked;
    var lowercase = document.getElementById('lowercase').checked;
    var numbers = document.getElementById('numbers').checked;
    var symbols = document.getElementById('symbols').checked;

    var password = generatePassword(length, uppercase, lowercase, numbers, symbols);
    document.getElementById('password').textContent = password;
});

function generatePassword(length, uppercase, lowercase, numbers, symbols) {
    var charset = '';
    if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) charset += '0123456789';
    if (symbols) charset += '!@#$%^&*()_+[]{}|;:,.<>?';

    var password = '';
    for (var i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
}


// listener to the output box
document.addEventListener('DOMContentLoaded', function() {
    const passwordText = document.querySelector(".passwordText");

    passwordText.addEventListener('click', function(){
        const textToCopy = passwordText.textContent;

        const textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        document.body.appendChild(textarea);

        textarea.select();
        textarea.setSelectionRange(0,99999);

        document.execCommand('copy');

        document.body.removeChild(textarea);

        alert("Text copied to clipboard: "+textToCopy);
    });
});