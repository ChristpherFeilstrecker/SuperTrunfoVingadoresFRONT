import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../components/constants/BaseURL";
import useRequestData from "../../components/Hooks/useRequestData";
import "./styledIntroPage.css";
import fundoIntro from "../../components/images/Style/fundoinicial.png"
import vingadores from "../../components/images/Style/vingadores.png"
import logovingadores from "../../components/images/Style/logovingadores.png"
import btnStart from "../../components/images/Style/jogar.png"
import btnBack from "../../components/images/Style/botão.png"

export default function IntroPage({ cards, setCards }) {
    let navigate = useNavigate();
    const getCards = useRequestData(`${BASE_URL}/supertrunfomarvel/start`)

    const selectCards = () => {
        setCards(getCards)
        navigate(`/sorteio`)
    }

    return (
        <div id="introPage">
            <div className="body-intro-page">
                <div className="btn-start-game-container">
                    <div className="btn-start-game" onClick={() => selectCards()}>
                    <img className="img-btn-start" src={btnStart}></img>
                        </div>
                </div>
                <div className="btn-structions-container">
                    <div className="btn-structions" onClick={() => navigate(`/instructions`)}>
                    <img className="img-btn-strucions" src={btnBack}></img>

                    <div className="img-btn-strucions-word">Instruções</div>
                        </div>
                </div>

            </div>
            <img className="img-fundo-intro" src={fundoIntro}></img>
            <div className="img-vingadores-container">
                <img className="img-vingadores" src={vingadores}></img>
            </div>

            <div className="img-logovingadores-container">
                <img className="img-logovingadores" src={logovingadores}></img>
            </div>
        </div>
    )
}