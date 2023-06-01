// PopUp Bienvenida
window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popupBienvenida").style.display = "block";
        },
        1000
    )
});


document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popupBienvenida").style.display = "none";
});

// PopUp Características

document.querySelector("#btnContinuar").addEventListener("click", function(){
    document.querySelector(".popupBienvenida").style.display = "none";
    document.querySelector(".popup2").style.display = "block";
});

document.querySelector("#close2").addEventListener("click", function(){
    document.querySelector(".popup2").style.display = "none";
});

document.querySelector("#btnCerrar").addEventListener("click", function(){
    document.querySelector(".popup2").style.display = "none";
});

// PopUp Copiado

document.querySelector("#close3").addEventListener("click", function(){
    document.querySelector(".popup3").style.display = "none";
});

document.querySelector("#btnAceptar").addEventListener("click", function(){
    document.querySelector(".popup3").style.display = "none";
});

// PopUp Error Caracteres

document.querySelector("#close4").addEventListener("click", function(){
    document.querySelector(".popup4").style.display = "none";
});

document.querySelector("#btnAceptar2").addEventListener("click", function(){
    document.querySelector(".popupCaracteres").style.display = "none";
});
// Función para encriptar

const textArea = document.querySelector("#encryptedText");
const message = document.querySelector("#decryptedText");

function encryptBtn() {
  const inputText = textArea.value;
  const filteredText = filterText(inputText);
  
  if (filteredText !== inputText) {
    document.querySelector(".popupCaracteres").style.display = "block";;
    return;
  }
  
  const encryptedText = encrypt(filteredText);
  message.value = encryptedText;
  textArea.value = "";
  message.style.backgroundImage = "none";
}

function encrypt(stringEncrypt) {
  let letterlist = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncrypt = stringEncrypt.toLowerCase();

  for (let i = 0; i < letterlist.length; i++) {
    if (stringEncrypt.includes(letterlist[i][0])) {
      stringEncrypt = stringEncrypt.replaceAll(letterlist[i][0], letterlist[i][1]);
    }
  }

  return stringEncrypt;
}

function filterText(inputText) {
  var filter = /[^a-z\s]/gi;
  var filteredText = inputText.toLowerCase().replace(filter, "");

  return filteredText;
}




// Función para desencriptar


function decryptBtn(){
    const inputText = textArea.value;
    const encryptedText = decrypt(textArea.value)
    const filteredDText = filterDText(inputText);
  
  if (filteredDText !== inputText) {
    document.querySelector(".popupCaracteres").style.display = "block";;
    return;
  }
    message.value = encryptedText;
    textArea.value = "";
    message.style.backgroundImage = "none";
}

function decrypt(stringDecrypt){
    let letterlist = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDecrypt = stringDecrypt.toLowerCase()

    for(let i = 0; i < letterlist.length; i++){
        if(stringDecrypt.includes(letterlist[i][1])){
            stringDecrypt = stringDecrypt.replaceAll(letterlist[i][1], letterlist[i][0])
        }
    }
    return stringDecrypt
}

function filterDText(inputText) {
    var filter = /[^a-z\s]/gi;
    var filteredDText = inputText.toLowerCase().replace(filter, "");
  
    return filteredDText;
  }

function copy(){
    var content = document.getElementById("decryptedText");
    content.select();
    document.execCommand("copy");
    document.querySelector(".popup3").style.display = "block";
}
