import { useNavigate } from "react-router-dom";
import fundoIntro from "../../components/images/Style/fundovencedor.png"
import backCard from "../../components/images/Style/fundocarta.png"
import btnBack from "../../components/images/Style/botão.png"
import imgPlayerback from "../../components/images/Style/img1.png"
import imgPlayer from "../../components/images/Style/player.png"
import imgPC from "../../components/images/Style/pc.png"


export default function WinnerPage({ setAttribut }) {
    let navigate = useNavigate();

    const newPlay = () => {
        setAttribut("?")
        navigate("/")
    }

    return (
        <div className="winner-page">
            <img className="img-fundo-winner" src={fundoIntro} alt="fundointro"></img>

            <div className="winner-container">

                <div className="winner-box">
                    <div className="winner-left-container">
                        <div className="winner-text">VENCEDOR</div>
                        <img className="card-back-left" src={backCard} alt="backCard"></img>
                        <div className="imgs-player-box to-top">
                            <div className="name-player">PLAYER</div>
                            <img className="img-player-back" src={imgPlayerback} alt="backplayer"></img>
                            <img className="img-player" src={imgPlayer} alt="imgplayer"></img>
                        </div>
                    </div>
                    <div className="winner-rigth-container">
                        <img className="card-back" src={backCard} alt="backcard"></img>
                        <div className="imgs-player-box to-top">
                            <div className="name-player">PC</div>
                            <img className="img-player-back" src={imgPlayerback} alt="backplayer"></img>
                            <img className="img-player" src={imgPC} alt="imgplayer"></img>
                        </div>
                    </div>
                </div>
                <div onClick={() => newPlay()} className="btn-winner-container">
                    <img className="img-btn-strucions" src={btnBack} alt="backbtn"></img>
                    <div className="new-game-word">NOVA PARTIDA</div>
                </div>

            </div>
        </div>
    )
}