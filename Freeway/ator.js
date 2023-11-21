let yator = 366;
let xator = 85;
let colisao = false;
let pontos = 0;

function mostraAtor(){
  image(vaca, xator, yator, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yator -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (mover()){
      yator += 3;
    }
  }
}
function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemcarros.length; i++){
    colisao = collideRectCircle(xcarros[i], ycarros[i], comprimentoCarro, alturaCarro, xator, yator, 15)
    if (colisao){
      posicaoInicial();
      if (pontos > 0){
        pontos -= 1;
      }
    }
  }
}
function posicaoInicial(){
  yator = 366;
}
function mostrapontos(){
  textAlign(CENTER);
  textSize(25);
  fill(255,60,0);
  text(pontos,width/2, 27);
}
function addpontos(){
  if (yator < 10){
    pontos += 1
    posicaoInicial();
  }
}
function mover(){
  return yator < 366;
}