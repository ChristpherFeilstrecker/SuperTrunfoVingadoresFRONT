import "./styledBattlePhase.css";
import { useNavigate } from "react-router-dom";
import Winner from "../../components/system/Winner";
import fundoIntro from "../../components/images/Style/fundo.png"
import btnBack from "../../components/images/Style/botão.png"
import imgPlayerback from "../../components/images/Style/img1.png"
import imgPlayer from "../../components/images/Style/player.png"
import imgPC from "../../components/images/Style/pc.png"
import backCard from "../../components/images/Style/fundocarta.png"
import frontCard from "../../components/images/Style/cartafrente.png"
import { useEffect, useState } from "react";


export default function BattlePhase({ cards, setCards, attribut, setAttribut, setTurn, turn }) {
  const navigate = useNavigate();

  const cardsJogador = cards.cardsJogador
  const cardsPC = cards.cardsPC

  let win = Winner({ cardsJogador, cardsPC, attribut })

  const message = () => {

    if (win === "Card Jogador Ganhou") {
      return ("Receba carta")
    } else if (win === "Card PC Ganhou") {
      return ("Entregue sua carta")
    }
  }


  const givCard = () => {

    if (win === "Card Jogador Ganhou") {
   
      setTurn("jogador")
      setAttribut("?")
      cardsJogador.push(cardsPC[0])
      cardsJogador.push(cardsJogador[0])
      cardsJogador.shift()
      cardsPC.shift()
      localStorage.setItem('cards', JSON.stringify(cards))
      localStorage.setItem('turn', JSON.stringify(turn))
    } else {
    
      setTurn("pc")
      cardsPC.push(cardsJogador[0])
      cardsPC.push(cardsPC[0])
      cardsJogador.shift()
      cardsPC.shift()
      localStorage.setItem('cards', JSON.stringify(cards))
      localStorage.setItem('turn', JSON.stringify(turn))
    }

    if (cardsJogador.length === 0) {
      navigate(`/loser`)
    } else if (cardsPC.length === 0) {
      navigate(`/winner`)
    } else {
      
        navigate(`/select`)
    }
  }

  const cardsPlayerPack = cardsJogador && cardsJogador.map((product) => {
    return <div key={product.id}>
      <img className="back-card-player" src={backCard} key={product.id} alt="backcard"></img>
    </div>
  })

  const cardsPcPack = cardsPC && cardsPC.map((product) => {
    return <div key={product.id}>
      <img className="back-card-player invert-img" src={backCard} key={product.id} alt="backcard"></img>
    </div>
  })

  return (
    <div id="selectAtribut">
      <img className="img-fundo-intro" src={fundoIntro} alt="back"></img>
      <div className="select-atribut-container-page">       
        <div className="left-container-select-page">
          <div className="left-select-box">
            <div className="left-tittle-select-page">Resultado:</div>
            <div className="left-atribut-selected">
              <img className="img-btn-msg-winner" src={btnBack} alt="backbtn"></img>
              <div className="atribut-selected-word">{win}</div>
              <div className="img-btn-battle-container">
            <div onClick={() => givCard()} className="imgs-container">
              <img className="img-btn-battle-page" src={btnBack} alt="backbtn"></img>
              <div className="message-btn" >{message()}</div>
            </div>
          </div>             
            </div>          
          </div>
          <div className="left-cards-box adjust" >
            <div className="img-player-box">
              <div className="imgs-player-box">
                <img className="img-player-back" src={imgPlayerback} alt="backplayer"></img>
                <img className="img-player" src={imgPlayer} alt="imgplayer"></img>
              </div>
              <div className="left-player-name-box">
                <img className="img-btn-strucions" src={btnBack} alt="backbtn"></img>
                <div className="atribut-selected-word">PLAYER</div>
              </div>
            </div>
            <div className="pack-player-cards">
              {cardsPlayerPack}
              <div className="player-card-box">
                <img className="card-player" src={frontCard} alt="frontcard"></img>
                <div className="card-player-atributs-container">
                  <div className="atributs-container1">
                    <div className="atribut-card" >{cardsJogador && cardsJogador[0].inteligencia}</div>
                    <div className="atribut-name-card">{cardsJogador && cardsJogador[0].nome}</div>
                    <div className="id-card">{cardsJogador && cardsJogador[0].id}</div>
                  </div>
                  <div className="atributs-container2">
                    <img className="atribut-img-card" src={cardsJogador && cardsJogador[0].imagem} alt="imgcard" />
                  </div>
                  <div className="atributs-container3">
                    <div className="atribut-card-2" >Habilidade: {cardsJogador && cardsJogador[0].habilidade}</div>
                    <div className="atribut-card-2" >Velocidade: {cardsJogador && cardsJogador[0].velocidade}</div>
                  </div>
                  <div className="atributs-container4">
                    <div className="atribut-card" >{cardsJogador && cardsJogador[0].forca}</div>
                    <div className="atribut-tipo" >{cardsJogador && cardsJogador[0].tipo}</div>
                    <div className="atribut-card" >{cardsJogador && cardsJogador[0].equipamento}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rigth-container-select-page">
          <div className="rigth-cards-box">
            <div className="pack-pc-cards">
              {cardsPcPack}
              <div className="pc-card-box turn180">
                <div className="pc-front-card-box">
                  <div className="atributs-container2">
                    <img className="atribut-img-card" src={cardsPC && cardsPC[0].imagem} alt="imgavenger" />
                  </div>
                  <img className="front-card-img" src={frontCard} alt="frontcard"></img>
                  <div className="atributs-pc-card">
                    <div className="atributs-container1-pc-card">
                      <div className="atribut-card" >{cardsPC && cardsPC[0].inteligencia}</div>
                      <div className="atribut-name-card">{cardsPC && cardsPC[0].nome}</div>
                      <div className="id-card">{cardsPC && cardsPC[0].id}</div>
                    </div>
                    <div className="atributs-container2-pc-card">
                      <div className="atribut-card-2">Habilidade: {cardsPC && cardsPC[0].habilidade}</div>
                      <div className="atribut-card-2" >Velocidade: {cardsPC && cardsPC[0].velocidade}</div>
                    </div>
                    <div className="atributs-container3-pc-card">
                      <div className="atribut-card" >{cardsPC && cardsPC[0].forca}</div>
                      <div className="atribut-tipo" >{cardsPC && cardsPC[0].tipo}</div>
                      <div className="atribut-card" >{cardsPC && cardsPC[0].equipamento}</div>
                    </div>
                  </div>
                </div>
                <div className="pc-back-card-box">
                  <img className="back-card-img" src={backCard} alt="backcard"></img>
                </div>
              </div>
            </div>
            <div className="img-player-box">
              <div className="imgs-player-box">
                <img className="img-player-back" src={imgPlayerback} alt="imgbackplayer"></img>
                <img className="img-pc" src={imgPC} alt="imgplayer"></img>
              </div>
              <div className="left-player-name-box">
                <img className="img-btn-strucions" src={btnBack} alt="backbtn"></img>
                <div className="atribut-selected-word">PC</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}