/**
 *  Sorteio de uma carta
 * Exemplo de uso de um vetor
 * @author Jean Andrade
 */

function sortear(){
    let nipes=['♥','♦','♣','♠']
    let faces=["A","2","3","4","5","6","7","8","9","10","J","Q","K"]

    // sorteio do indice do vetor
    let nipeSorteado = nipes[Math.floor(Math.random() * 4)] // 0 1 2 3
    let faceSorteada = faces[Math.floor(Math.random() * 13)] // 0 1 2 3

   // console.log(`${faceSorteado} de ${nipeSorteado}`)

   // Determinar a cor com base no nipe sorteado
   let cor
   if (nipeSorteado === '♥' || nipeSorteado === '♦'){
   cor = '#ff0000'
   }else {
    cor = '#000'
   }

   // renderizar o canto superior esquerdo da carta
   // a linha abaixo adiciona a div identificada como 'susEsq' a face e o nipe sorteado e também tags <dv> adicionais
   document.getElementById('supEsq').innerHTML = `<div>${faceSorteada}</div> <div>${nipeSorteado}</div>`

   // A linha abaixo muda o css ref a tag identificada
   document.getElementById('supEsq').style.color = cor

      // renderizar o centro da carta
      let cc = document.getElementById('centroCarta')
      if (faceSorteada === 'J') {
          cc.innerHTML = `<img src="./img/valete.png">`
      } else if (faceSorteada === 'Q') {
          cc.innerHTML = `<img src="./img/dama.png">`
      } else if (faceSorteada === 'K') {
          cc.innerHTML = `<img src="./img/rei.png">`
      } else {
          cc.innerHTML = `${nipeSorteado}`
          cc.style.color = cor
      }

   cc.innerHTML = `${nipeSorteado}`
   cc.style.color = cor

   // renderizar o canto inferior direito da carta
   // a linha abaixo adiciona a div identificada como 'susEsq' a face e o nipe sorteado e também tags <dv> adicionais
   document.getElementById('infDir').innerHTML = `<div>${faceSorteada}</div> <div>${nipeSorteado}</div>`
   document.getElementById('infDir').style.color = cor


}

//sortear()