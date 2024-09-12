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
        ).innerText = `${input} is a palindrome!`;
    } else {
        document.getElementById(
            "result"
        ).innerText = `${input} is not a palindrome`;
    }
};
