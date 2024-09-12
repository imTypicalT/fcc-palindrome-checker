// Get input text
function getInputText() {
    const inputText = document.getElementById("text-input").value;
    //  Check if empty string
    if (inputText === "") {
        alert("Please input a value");
    } else {
        textComparison(inputText);
    }
}
// Run if 'Enter' is hit
const input = document.getElementById("text-input");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-btn").click();
    }
});

// Compare inputText with reveresed text
const textComparison = (input) => {
    let textToCheck = input
        .toLowerCase()
        .replace(/[^0-9a-z]/g, "")
        .split("")
        .reverse()
        .join("");
    if (textToCheck === input.toLowerCase().replace(/[^0-9a-z]/g, "")) {
        document.getElementById(
            "result"
        ).innerHTML = `<span id="is-text">${input}</span> is a palindrome!`;
    } else {
        document.getElementById(
            "result"
        ).innerHTML = `<span id="is-not-text">${input}</span> is not a palindrome`;
    }
};
