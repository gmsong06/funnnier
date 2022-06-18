const text = document.getElementById('msg');
const mood = document.getElementById('moodSelect');
const type = document.getElementById('typeSelect');
const intense = document.getElementById('intensitySelect');

let textValue = "Select one";
let moodValue = "Select one";
let intensityValue = "Select one";
let typeValue = "Select one";

const button = document.getElementById('submit');

text.addEventListener('input', function handleChange(event) {
    textValue = text.value;
});

mood.addEventListener('input', function clicked(event) {
    moodValue = mood.value;
})

intense.addEventListener('input', function clicked(event) {
    intensityValue = intense.value;
})

type.addEventListener('input', function clicked(event) {
    typeValue = type.value;
})

function generateRes(){
    if(textValue != "Select one" && moodValue != "Select one" && intensityValue != "Select one" && typeValue != "Select one"){

    }
    else{
        alert("Please fill in all the questions 😐");
    }
}