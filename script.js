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
    gif.classList.add('guess');
    outputDiv.appendChild(gif);

    setTimeout(() => {
        removeImage(gif);
    }, 2000);
};

function thank() {
    const dontThank = document.createElement('img');
    dontThank.src = './images/gif2.gif';
    dontThank.classList.add('thank');
    outputDiv.appendChild(dontThank);
}


function removeImage(imageElement) {
    imageElement.parentNode.removeChild(imageElement);
}

button.addEventListener('click', () => {
    if(!isNaN(input.value)) {
        output.innerText = `Is this your age? Enter properly`;
    } else {
        createGif()
        setTimeout(() => {
            getAge(input.value);
        }, 2000);
        setTimeout(() => {
            thank();
        }, 2000);
    }
})