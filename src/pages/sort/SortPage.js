import { useEffect, useState } from "react";
import "./StyledSortPage.css";
import { useNavigate } from "react-router-dom";
import fundoIntro from "../../components/images/Style/fundo.png"
import moeda from "../../components/images/Style/moeda.gif"

export default function SortPage({ turn, setTurn }) {
    let navigate = useNavigate();
    const [sortWinner, setSortWinner] = useState("")
    const [result, setResult] = useState(false)
    const [coin, setCoin] = useState(false)

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const sort = (choice) => {
        if (choice === "cara") {
            const random = getRandomInt(0, 2)
            if (random === 0) {
                setSortWinner("Jogador começa")
                setTurn("jogador")
            } else {
                setSortWinner("PC começa")
                setTurn("pc")
            }
        } else if (choice === "coroa") {
            const random = getRandomInt(0, 2)
            if (random === 0) {
                setSortWinner("PC começa")
                setTurn("pc")
            } else {
                setSortWinner("Jogador começa")
                setTurn("jogador")
            }
        }
        localStorage.setItem('turn', JSON.stringify(turn))

        setCoin(true)
    }

    useEffect(() => {
            setTimeout(() => {
                setCoin(false)
                setResult(true)
            }, 5000)

    }, [coin])

    useEffect(() => {
        if (result === true) {
            setTimeout(() => {
                navigate("/select")
            }, 3000)
        }

    }, [result])

    return (
        <div className="sort-page">
            <img className="img-fundo" src={fundoIntro}></img>
            {result ?
                <div className="result-page-Container">
                    <div className="result">{sortWinner}</div>
                </div>
                :
                <div className="sort-page-Container">
                    <div>Escolha cara ou coroa</div>
                    <div className="sor-page-btn-container">
                        <button onClick={() => sort("cara")}>CARA</button>
                        <div className="sort-word">ou</div>
                        <button onClick={() => sort("coroa")}>COROA</button>
                    </div>
                    {coin ?
                        <div >
                            <img className="img-coin" src={moeda} alt="coin"></img>
                        </div>
                        :
                        <div className="coin-container">

                        </div>
                    }


                </div>
            }

        </div>
    )
}