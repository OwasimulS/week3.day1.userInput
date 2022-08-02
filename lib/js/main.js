let titleInput = document.getElementById('title_input');
let mainTitle = document.getElementById('main_title');
let submitBtn = document.getElementById('submit_button');
let nounInput = document.getElementById('noun');
let verbInput = document.getElementById('verb');
let adjectiveInput = document.getElementById('adjective');
let storyResult = document.getElementById('story_result');
let form = document.getElementsByClassName('form');
titleInput.addEventListener('change',input);
function input() {
    mainTitle.innerHTML = titleInput.value;
}

submitBtn.addEventListener('click', blank);
function blank() {
    let noun = nounInput.value;
    let adjective = adjectiveInput.value;
    let verb = verbInput.value;
    if (adjectiveInput.value == '' || verbInput.value == '' || nounInput.value == '' || titleInput.value == '') {
        alert('Please fill out all fields');
    }
    else {
        storyResult.innerHTML = `Last night I ate a ${noun}, and today I just had to ${verb}. What a ${adjective} day!`;
        form.style.display = 'none';

    }
}
