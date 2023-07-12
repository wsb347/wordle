// a=65 z=90
let attempts = 0;
let index = 0;
let answerWord = "APPLE";

function appStart() {
  const handleEnterKey = () => {
    for (let i = 0; i < 5; i++) {
      const block = document.querySelector(
        `.board-block[data-index='${attempts}${i}']`
      );
      const letter = block.innerText;
      const answer = answerWord[i];
      console.log("입력한 글자 : ", letter, "정답 글자 : ", answer);

      if (letter === answer) {
        block.style.background = "#6AAA64";
        block.style.color = "white";
        block.style.border = "2px solid rgb(106,170,100)";
      } else if (answerWord.includes(letter)) {
        block.style.background = "#C9B458";
        block.style.color = "white";
        block.style.border = "2px solid rgb(201,180,88)";
      } else {
        block.style.background = "#787C7E";
        block.style.color = "white";
        block.style.border = "2px solid rgb(120,124,126)";
      }
    }
  };

  const handleKeydown = (event) => {
    const keyCode = event.keyCode;
    const key = event.key.toUpperCase();

    //console.log("키가 눌렸습니다! 누른 값은", keyCode, "입니다");
    //console.log("키가 눌렸습니다! 누른 값은", key, "입니다");

    console.log("키가 눌렸습니다! 누른 값은", keyCode, "입니다");

    const thisBlock = document.querySelector(
      `.board-block[data-index='${attempts}${index}']`
    );

    if (index === 5) {
      if (keyCode == 13) {
        handleEnterKey();
        index = 0;
        attempts += 1;
      } else return;
    } else if (keyCode > 64 && keyCode < 91) {
      index += 1;
      thisBlock.innerText = key;
      thisBlock.style.border = " 2px solid rgb(135,138,140)";
    } else if (keyCode === 8) thisBlock.remove;
  };

  window.addEventListener("keydown", handleKeydown);
}

appStart();
