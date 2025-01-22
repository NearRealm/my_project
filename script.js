// Create a button element
const button = document.createElement('button');
button.innerText = 'Click Me';

// Add an event listener to the button
button.addEventListener('click', () => {
    alert('Home Planet calls me!');
});

// Append the button to the body
document.body.appendChild(button);