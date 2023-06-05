console.log("Checked the script.");

upperCase.addEventListener("click", () => {
    console.log("Changed to upperCase");
    inputText.value = inputText.value.toUpperCase();
})

lowerCase.addEventListener("click", () => {
    console.log("Changed to LowerCase");
    inputText.value = inputText.value.toLowerCase();
})

inputText.addEventListener("input", () => {
    console.log("Counting");
    characterCount.innerText = inputText.value.length;
    wordCount.innerText = inputText.value.trim().split(" ").length;
})

spaces.addEventListener("click", () => {
    console.log("removing extra spaces");
    inputText.value = inputText.value.replace(/\s+/g, ' ').trim();

})

removeLine.addEventListener("click", () => {
    console.log("removing new lines");
    inputText.value = inputText.value.replace(/\n+/g, '\n').trim();

})
clipBoard.addEventListener("click", () => {
    console.log("Copy the text");
    navigator.clipboard.writeText(inputText.value);
})