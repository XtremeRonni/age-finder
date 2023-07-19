const input = document.getElementById('nameInput');
const button = document.getElementById('btn');
const output = document.getElementById('output');
const outputDiv = document.getElementById('outputDiv');

const url = `https://api.agify.io/?name=${name}`

const getAge = (name) => {
    fetch(url + name)
    .then(response => response.json())
    .then(json => {
        output.innerText = `Hey ${name}, you're ${json.age} right 🥱?`;
    })
}

function createGif() {
    const gif = document.createElement('img');
    gif.src = './images/gif.gif';
    outputDiv.appendChild(gif);
};

function removeGif(gif) {
    outputDiv.removeChild(gif);
}

button.addEventListener('click', () => {
    if(!isNaN(input.value)) {
        output.innerText = `Is this your age? Enter properly`;
    } else {
        removeGif(createGif())
        setInterval(() => {
            getAge(input.value);
        }, 5000);
    }
})