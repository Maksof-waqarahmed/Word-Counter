let textArea = document.getElementById("textArea");

let totalChar = 0;
let previousLength = 0;
let totalWords = 0;
textArea.addEventListener("input", function () {
    let currentLength = this.value.length;
    if (currentLength < previousLength) {
        totalChar--;
    } else {
        totalChar++;
    }
    previousLength = currentLength;

    let words = this.value.trim().split(" ");
    totalWords = words.filter(function (elm) {
        return elm != "";
    })
    count(totalWords.length, totalChar);
});

let text = document.getElementById("wordCount");
function count(word, char) {
    text.innerHTML = `${word} Words and ${char} Character`
}


let currentFontSize = 18;

function incFont() {
    currentFontSize += 2;
    if (textArea.value.length !== 0) {
        textArea.style.fontSize = currentFontSize + "px";
    }
}

function decFont() {
    currentFontSize -= 2;
    if (currentFontSize > 10 && textArea.value.length !== 0) {
        textArea.style.fontSize = currentFontSize + "px";
    }
}

function makeBold() {
    textArea.style.fontWeight = textArea.style.fontWeight === 'bold' ? 'normal' : 'bold';
}

function makeItalic() {
    textArea.style.fontStyle = textArea.style.fontStyle === 'italic' ? 'normal' : 'italic';
}

function makeUnderline() {
    textArea.style.textDecoration = textArea.style.textDecoration === 'underline' ? 'none' : 'underline';
}

function clearText() {
    textArea.value = "";
    count(0, 0);
    totalChar = 0;
    previousLength = 0;
    textArea.style.textDecoration = 'none';
    textArea.style.fontStyle = 'normal';
    textArea.style.fontWeight = 'normal';
    textArea.style.fontSize = 18 + "px"
}
