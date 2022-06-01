import "./styledSelectAtribut.css";
import { useNavigate } from "react-router-dom";
import fundoIntro from "../../components/images/Style/fundo.png"
import btnBack from "../../components/images/Style/botão.png"
import imgPlayerback from "../../components/images/Style/img1.png"
import imgPlayer from "../../components/images/Style/player.png"
import imgPC from "../../components/images/Style/pc.png"
import backCard from "../../components/images/Style/fundocarta.png"
import frontCard from "../../components/images/Style/cartafrente.png"
import battle from "../../components/images/Style/batalhar.png"

export default function SelectAtribut({ cards, setcards, attribut, setAttribut, turn, setTurn }) {
  let navigate = useNavigate();
  const cardsJogador = cards.cardsJogador
  const cardsPC = cards.cardsPC
  const atributSelect = (x) => {


    if (turn === "pc") {
      alert("PC já definiu atributo").preventDefault()
    } if (turn === "batalha") {
      alert("Em faze de batalha, não é possivel editar atributo").preventDefault()
    }

    setAttribut(x)
    localStorage.setItem('turn', JSON.stringify(turn))

  }

  const GotoBattlePhase = () => {
    //setTurn("batalha")
    if (attribut === "?") {
      alert("Selecione um atributo").preventDefault()
    }
    navigate(`/battle`)
  }



  if (turn === "pc") {
    if (cardsPC[0].habilidade === 6) {
      setAttribut("Habilidade")
    } else if (cardsPC[0].forca === 6) {
      setAttribut("Força")
    } else if (cardsPC[0].velocidade === 6) {
      setAttribut("Velocidade")
    } else if (cardsPC[0].equipamento === 6) {
      setAttribut("Equipamento")
    } else if (cardsPC[0].inteligencia === 6) {
      setAttribut("Inteligência")
    } else if (cardsPC[0].habilidade === 5) {
      setAttribut("Habilidade")
    } else if (cardsPC[0].forca === 5) {
      setAttribut("Força")
    } else if (cardsPC[0].velocidade === 5) {
      setAttribut("Velocidade")
    } else if (cardsPC[0].equipamento === 5) {
      setAttribut("Equipamento")
    } else if (cardsPC[0].inteligencia === 5) {
      setAttribut("Inteligência")
    }

    localStorage.setItem('turn', JSON.stringify(turn))

  }

  const cardsPlayerPack = cardsJogador && cardsJogador.map((product) => {
    return <div>
      <img className="back-card-player" src={backCard}></img>
    </div>
  })

  const cardsPcPack = cardsPC && cardsPC.map((product) => {
    return <div>
      <img className="back-card-player invert-img" src={backCard}></img>
    </div>
  })

  return (
    <div id="selectAtribut">
      <img className="img-fundo-intro" src={fundoIntro}></img>


      <div className="select-atribut-container-page">
        <div className="left-container-select-page">
          <div className="left-select-box">
            <div className="left-tittle-select-page">Atributo da disputa:</div>
            <div className="left-atribut-selected">
              <img className="img-btn-strucions" src={btnBack}></img>
              <div className="atribut-selected-word">{attribut}</div>
            </div>
          </div>
          <div className="left-cards-box adjust" >
            <div className="img-player-box">
              <div className="imgs-player-box">
                <img className="img-player-back" src={imgPlayerback}></img>
                <img className="img-player" src={imgPlayer}></img>
              </div>
              <div className="left-player-name-box">
                <img className="img-btn-strucions" src={btnBack}></img>
                <div className="atribut-selected-word">PLAYER</div>
              </div>
            </div>
            <div className="pack-player-cards">
              {cardsPlayerPack}
              <div className="player-card-box">

                <img className="card-player" src={frontCard}></img>
              <div className="card-player-atributs-container">
                <div className="atributs-container1">
                  <div className="atribut-card" onClick={() => atributSelect("Inteligência")}>{cardsJogador && cardsJogador[0].inteligencia}</div>
                  <div className="atribut-name-card">{cardsJogador && cardsJogador[0].nome}</div>
                  <div className="id-card">{cardsJogador && cardsJogador[0].id}</div>
                </div>
                <div className="atributs-container2">
                  <img className="atribut-img-card" src={cardsJogador && cardsJogador[0].imagem} />
                </div>
                <div className="atributs-container3">
                  <div className="atribut-card-2" onClick={() => atributSelect("Habilidade")}>Habilidade: {cardsJogador && cardsJogador[0].habilidade}</div>
                  <div className="atribut-card-2" onClick={() => atributSelect("Velocidade")}>Velocidade: {cardsJogador && cardsJogador[0].velocidade}</div>
                </div>
                <div className="atributs-container4">
                  <div className="atribut-card" onClick={() => atributSelect("Força")}>{cardsJogador && cardsJogador[0].forca}</div>
                  <div className="atribut-tipo" onClick={'"() => atributSelect("Equipamento")"'}>{cardsJogador && cardsJogador[0].tipo}</div>
                  <div className="atribut-card" onClick={() => atributSelect("Equipamento")}>{cardsJogador && cardsJogador[0].equipamento}</div>
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
              <img className="card-pc" src={backCard}></img>
            </div>
            <div className="img-player-box">
              <div className="imgs-player-box">
                <img className="img-player-back" src={imgPlayerback}></img>
                <img className="img-pc" src={imgPC}></img>
              </div>
              <div className="left-player-name-box">
                <img className="img-btn-strucions" src={btnBack}></img>
                <div className="atribut-selected-word">PC</div>
              </div>
            </div>
          </div>
          <div className="img-btn-battle-container">
          <div onClick={() => GotoBattlePhase()} className="imgs-container">
            <img className="img-btn-battle" src={btnBack}></img>
            <img className="img-battle" src={battle}></img>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}