
const counter = () => {
    let inputArea = document.getElementById("inputArea").value;
    let output = document.getElementById("output");
    let char = document.getElementById("char");
    let outputContainer = document.getElementById("outputContainer");
    let bar = document.getElementsByClassName("wps");


    let lengthOfText = inputArea.length;

    outputContainer.style.display = "initial";
    for (let i = 0; i < bar.length; i++) {

        bar[i].style.display = "initial";
    }



    output.innerHTML = inputArea;
    char.innerHTML = lengthOfText;
    let wordCount = document.getElementById("words");
    function getCount(str) {
        return str.split(' ').filter(function (num) {
            return num != ''
        }).length;
    }
    let words = getCount(inputArea);
    console.log(words);
    wordCount.innerHTML = words;

}
