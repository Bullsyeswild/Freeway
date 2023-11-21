let xcarros = [600, 600, 600, 600, 600, 600];
let ycarros = [40, 96, 150, 210, 270, 318];
let vels = [3.9, 4.7 , 8, 5.9, 4, 2.8];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for(let i = 0; i < imagemcarros.length; i= i+1){
    image(imagemcarros[i], xcarros[i], ycarros[i], comprimentoCarro, alturaCarro);
  }
}
function movimentaCarro(){
  for (let i = 0; i <imagemcarros.length; i = i+1){
    xcarros[i] -= vels[i];
  }
}
function voltaCarro(){
  for(let i = 0; i < imagemcarros.length; i = i+1){
    if (passoutela(xcarros[i])){
      xcarros[i] = 600;
    }
  }
}
function passoutela(xcarro){
  return xcarro < -50;
}