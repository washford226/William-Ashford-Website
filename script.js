document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('#dynamic input');
    const button = document.querySelector('#dynamic button');
    const myList = document.querySelector('#myList');

    button.addEventListener('click', function() {
        const text = input.value;
        if (text) {
            const listItem = document.createElement('li');
            listItem.textContent = text;
            myList.appendChild(listItem);
            input.value = '';
        }
    });
});