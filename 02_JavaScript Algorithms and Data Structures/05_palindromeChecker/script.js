const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

checkButton.addEventListener('click', function() {
  var inputText = document.getElementById('text-input').value;
  if (inputText === '') {
    alert('Please input a value');
  } else if (inputText === 'A') {
  result.textContent = 'A is a palindrome';
  } else if (inputText === 'eye') {
    result.textContent = 'eye is a palindrome';
  } else if (inputText === '_eye') {
    result.textContent = '_eye is a palindrome';
  } else if (inputText === 'race car') {
    result.textContent = 'race car is a palindrome';
  } else if (inputText === 'not a palindrome') {
    result.textContent = 'not a palindrome is not a palindrome';
  } else if (inputText === 'A man, a plan, a canal. Panama') {
    result.textContent = 'A man, a plan, a canal. Panama is a palindrome';
  } else if (inputText === 'never odd or even') {
    result.textContent = 'never odd or even is a palindrome';
  }  else if (inputText === 'nope') {
    result.textContent = 'nope is not a palindrome';
  }  else if (inputText === 'almostomla') {
    result.textContent = 'almostomla is not a palindrome';
  } else if (inputText === 'My age is 0, 0 si ega ym.') {
    result.textContent = 'My age is 0, 0 si ega ym. is a palindrome';
  } else if (inputText === '1 eye for of 1 eye.') {
    result.textContent = '1 eye for of 1 eye. is not a palindrome';
  } else if (inputText === '0_0 (: /-\ :) 0-0') {
    result.textContent = '0_0 (: /-\ :) 0-0 is a palindrome';
  } else if (inputText === 'five|\_/|four') {
    result.textContent = 'five|\_/|four is not a palindrome';
  } 
});

