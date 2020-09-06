const number = document.getElementById("name");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (number.value === "") {
        alert("Enter a valid number please");
        return;
    }
    async function facts() {
        const res = await (
            await fetch(`https://numbers-api.vercel.app/${number.value}`)
        ).text();
        alert(res);
    }
    facts().then(() => {
        number.value = "";
    }).catch((e) => {
        alert("An error occurred");
    });
});