// a=65 z=90
let attempts = 0;
let index = 0;

function appStart() {
  const handleKeydown = (event) => {
    const keyCode = event.keyCode;
    const key = event.key.toUpperCase();

    //console.log("키가 눌렸습니다! 누른 값은", keyCode, "입니다");
    //console.log("키가 눌렸습니다! 누른 값은", key, "입니다");

    const thisBlock = document.querySelector(
      `.board-block[data-index='${attempts}${index}']`
    );
    if (index > 4 && keyCode == 13) {
      console.log("키가 눌렸습니다! 누른 값은", key, "입니다");
      index = 0;
      attempts += 1;
    } else if (keyCode > 64 && keyCode < 91) {
      index += 1;
      console.log(index);

      thisBlock.innerText = key;
      thisBlock.style.border = " 2px solid rgb(135,138,140)";
    }
  };

  window.addEventListener("keydown", handleKeydown);
}

appStart();
