
let Winner = ({ cardsJogador, cardsPC, attribut }) => {

  if (cardsJogador[0].tipo === "Super Trunfo") {
    const id = ["A1", "A2", "A3", "A4", "A5", "A6"]

    for (let idCard of id) {
      if(cardsPC[0].id === idCard){
        return "Card PC Ganhou"
      }
    }
     
    return "Card Jogador Ganhou"

  } else if (cardsPC[0].tipo === "Super Trunfo") {
    const id = ["A1", "A2", "A3", "A4", "A5", "A6"]

    for (let idCard of id) {
      if(cardsJogador[0].id === idCard){
        return "Card Jogador Ganhou"
      }
    }
     
    return "Card PC Ganhou"

  }

  if (attribut === "Habilidade") {
    if (cardsJogador[0].habilidade > cardsPC[0].habilidade) {
      return "Card Jogador Ganhou"
    } else if (cardsJogador[0].habilidade < cardsPC[0].habilidade) {
      return "Card PC Ganhou"
    } else if (cardsJogador[0].habilidade === cardsPC[0].habilidade) {
      if (cardsJogador[0].forca > cardsPC[0].forca) {
        return "Card Jogador Ganhou"
      } else if (cardsJogador[0].forca < cardsPC[0].forca) {
        return "Card PC Ganhou"
      }
    }

  } else if (attribut === "Força") {

    if (cardsJogador[0].forca > cardsPC[0].forca) {
      return "Card Jogador Ganhou"
    } else if (cardsJogador[0].forca < cardsPC[0].forca) {
      return "Card PC Ganhou"
    } else if (cardsJogador[0].forca === cardsPC[0].forca) {
      if (cardsJogador[0].velocidade > cardsPC[0].velocidade) {
        return "Card Jogador Ganhou"
      } else if (cardsJogador[0].velocidade < cardsPC[0].velocidade) {
        return "Card PC Ganhou"
      } else if (cardsJogador[0].velocidade === cardsPC[0].velocidade) {
        if (cardsJogador[0].equipamento > cardsPC[0].equipamento) {
          return "Card Jogador Ganhou"
        } else if (cardsJogador[0].equipamento < cardsPC[0].equipamento) {
          return "Card PC Ganhou"
        }
      }





    }

  } else if (attribut === "Velocidade") {

    if (cardsJogador[0].velocidade > cardsPC[0].velocidade) {
      return "Card Jogador Ganhou"
    } else if (cardsJogador[0].velocidade < cardsPC[0].velocidade) {
      return "Card PC Ganhou"
    } else if (cardsJogador[0].velocidade === cardsPC[0].velocidade) {
      if (cardsJogador[0].equipamento > cardsPC[0].equipamento) {
        return "Card Jogador Ganhou"
      } else if (cardsJogador[0].equipamento < cardsPC[0].equipamento) {
        return "Card PC Ganhou"
      }
    }

  } else if (attribut === "Equipamento") {

    if (cardsJogador[0].equipamento > cardsPC[0].equipamento) {
      return "Card Jogador Ganhou"
    } else if (cardsJogador[0].equipamento < cardsPC[0].equipamento) {
      return "Card PC Ganhou"
    } else if (cardsJogador[0].equipamento === cardsPC[0].equipamento) {
      if (cardsJogador[0].inteligencia > cardsPC[0].inteligencia) {
        return "Card Jogador Ganhou"
      } else if (cardsJogador[0].inteligencia < cardsPC[0].inteligencia) {
        return "Card PC Ganhou"
      }
    }

  } else if (attribut === "Inteligência") {

    if (cardsJogador[0].inteligencia > cardsPC[0].inteligencia) {
      return "Card Jogador Ganhou"
    } else if (cardsJogador[0].inteligencia < cardsPC[0].inteligencia) {
      return "Card PC Ganhou"
    } else if (cardsJogador[0].inteligencia === cardsPC[0].inteligencia) {
      if (cardsJogador[0].habilidade > cardsPC[0].habilidade) {
        return "Card Jogador Ganhou"
      } else if (cardsJogador[0].habilidade < cardsPC[0].habilidade) {
        return "Card PC Ganhou"
      }
    }

  }

}
export default Winner