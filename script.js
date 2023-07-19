const input = document.getElementById('nameInput');
const button = document.getElementById('btn');
const output = document.getElementById('output');

const url = `https://api.agify.io/?name=${name}`

const getAge = (name) => {
    fetch(url + name)
    .then(response => response.json())
    .then(json => {
        output.innerText = `Hey ${name}, you're ${json.age} right 🥱?`;
    })
}

button.addEventListener('click', () => {
    if(!isNaN(input.value)) {
        output.innerText = `Is this your age? Enter properly`;
    } else {
        getAge(input.value);
    }
})