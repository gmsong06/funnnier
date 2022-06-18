const moods = [
    "Anxious",
    "Annoyed",
    "Awkward",
    "Calm",
    "Confused",
    "Depressing",
    "Happy",
    "Eerie",
    "Festive",
    "Frightening",
    "Frustrated",
    "Hopeless",
    "Humorous",
    "Light-hearted",
    "Lonely",
    "Ominous",
    "Panicked",
    "Pessimistic",
    "Reflective",
    "Romantic",
    "Sad",
    "Sarcastic",
    "Tense",
    "Uneasy"
]

const intensity = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
]

const types = [
    "Threat",
    "Mistake",
    "Command",
    "Question",
    "New",
    "Comment",
    "Agreement",
    "Disagreement",
    "Goodbye",
    "Story"
]

moodFill();
intensityFill();
typesFill();

function moodFill(){
    const moodGroup = document.getElementById("moodSelect");
    for(let i = 0; i < moods.length; i++){
        const option = document.createElement('option');
        option.value = moods[i];
        const optionText = document.createTextNode(moods[i]);
        option.appendChild(optionText);
        moodGroup.appendChild(option);
    }
}

function intensityFill(){
    const intensityGroup = document.getElementById("intensitySelect");
    for(let i = 0; i < intensity.length; i++){
        const option = document.createElement('option');
        option.value = intensity[i];
        const optionText = document.createTextNode(intensity[i]);
        option.appendChild(optionText);
        intensityGroup.appendChild(option);
    }
}

function typesFill(){
    const typesGroup = document.getElementById("typeSelect");
    for(let i = 0; i < types.length; i++){
        const option = document.createElement('option');
        option.value = types[i];
        const optionText = document.createTextNode(types[i]);
        option.appendChild(optionText);
        typesGroup.appendChild(option);
    }
}