// === NAVEGACIÓN ESPECIAL SOLO PARA INTRODUCCIÓN ===
// Las 3 primeras slides son la introducción (índices 0,1,2)
const introEndIndex = 2;

function nextIntro(){
  if(index < introEndIndex){
    show(index + 1);
  }
}

function goToNextModule(){
  show(introEndIndex + 1);
}

