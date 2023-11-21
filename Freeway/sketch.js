function setup() {
    createCanvas(500, 400);
  }
  
  function draw(){
    background(rua);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAtor();
    voltaCarro();
    verificaColisao();
    mostrapontos();
    addpontos();
  } 