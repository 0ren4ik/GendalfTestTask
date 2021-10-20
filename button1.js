let btn = document.querySelector('.btn');
let text = document.querySelector('.textValue');

text.oninput = function() {
btn.value = text.value;
} 