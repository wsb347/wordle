// a=65 z=90
function appStart() {
  const handleKeydown = (event) => {
    const keyCode = event.keyCode;
    const key = event.key;

    //console.log("키가 눌렸습니다! 누른 값은", keyCode, "입니다");
    //console.log("키가 눌렸습니다! 누른 값은", key, "입니다");

    const thisBlock = document.querySelector(".board-block[data-index='00']");

    thisBlock.innerText = key;
  };

  window.addEventListener("keydown", handleKeydown);
}

appStart();
