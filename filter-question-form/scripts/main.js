const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const className = document.getElementById("class");
const section = document.getElementById("section");

document.querySelector("form").addEventListener("submit", submitForm);

function alphabets(n) {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let returnAlphabets = []
    for (let i = 0; i < n; i++) {
        returnAlphabets.push(alphabets[i]);
    }
    return returnAlphabets;
}
const classSections = {
    "VI": 10,
    "VII": 10,
    "VIII": 10,
    "IX": 15,
    "X": 15,
    "XI": 24,
    "XII": 24,
};
className.addEventListener("change", (a) => {
    section.innerHTML = `<option key="" selected>Select a section</option>`;
    if (a.target.value) {
        section.disabled = false;
        let val = alphabets(classSections[a.target.value]);
        for (let i = 0; i < val.length; i++) {
            let opt = document.createElement("option");
            opt.innerHTML = `<option key="${val[i]}">${val[i]}</option>`;
            section.appendChild(opt);
        }
    } else {
        section.disabled = true;
        section.innerHTML = `<option key="" selected>Select a section</option>`;
    }
});
const nameRegex = /^[a-zA-Z]/
const validName = (name) => name !== "" && nameRegex.test(name) ? true : "Enter a valid name";
const emailRegex = /^[r|v|e]\d{4,8}.+@dpsrkp.net$/;
const validEmail = (email) => emailRegex.test(email) ? true : "Please enter a valid dpsrkp.net email";
const validClass = (c) => Object.keys(classSections).includes(c) ? true : "Invalid class";
const validSection = (c, s) => alphabets(classSections[c]).includes(s) ? true : "Invalid section";
function submitForm(evt) {
    evt.preventDefault();
    let checking = [
        validName(nameInput.value),
        validEmail(emailInput.value),
        validClass(className.value),
        validSection(className.value, section.value),
    ];
    let validEntries = checking.every((v) => v === true);
    if (!validEntries) {
        alert(checking.find((m) => typeof m === "string"));
        return;
    }
    alert(`Hello, ${nameInput.value} <${emailInput.value}> from ${className.value}-${section.value}.`);
}