import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../components/constants/BaseURL";
import useRequestData from "../../components/Hooks/useRequestData";
import "./styledInstructionsPage.css";
import fundoIntro from "../../components/images/Style/fundoinicial.png"
import vingadores from "../../components/images/Style/vingadores.png"
import logovingadores from "../../components/images/Style/logovingadores.png"
import btnStart from "../../components/images/Style/jogar.png"
import btnBack from "../../components/images/Style/botão.png"
import cardInst from "../../components/images/Style/cartafrente.png"
import supe from "../../components/images/Style/super.jpg"

export default function InstructionsPage() {
    let navigate = useNavigate();


    return (
        <div id="introPage">

            <img className="img-fundo-intro" src={fundoIntro}></img>
            <div className="img-vingadores-container">
                <img className="img-vingadores" src={vingadores}></img>
            </div>

            <div className="img-logovingadores-container">
                <img className="img-logovingadores" src={logovingadores}></img>
            </div>

            <div className="instructions-container">
                <div className="collumn">

                    <div className="title">Iniciando a partida: </div>
                    <div className="text-1"> Você será direcionado para a página de sorteio, escolha cara ou coroa.</div>
                    <div className="text-1">  Após o sorteio, você será direcionado para a página de seleção de atributos.</div>
                    <div className="title">Selecionando Atributo: </div>
                    <div className="text-1"> Caso o computador tenha ganho a disputa do cara ou coroa, já será selecionado o atributo automaticamente.</div>
                    <div className="text-1"> Se você tiver ganho, selecione entre os atributos:</div>
                    <div className="atributs-img-structions">
                        <lu>
                            <li className="atribut-1">Inteligência <div className="line-1"></div></li>
                            <li className="atribut-2">Habilidade <div className="line-2"></div></li>
                            <li className="atribut-3">Força <div className="line-3"></div></li>

                        </lu>
                        <img className="img-card-structions" src={cardInst}></img>

                        <lu>

                            <li className="atribut-4" > <div className="line-4"> </div>Velocidade</li>
                            <li className="atribut-5"> <div className="line-5"> </div>Equipamento</li>
                        </lu>

                    </div>
                    <div className="text-1"> Selecionado o atributo clique em batalhar.</div>

                </div>
                <div className="collumn">

                    <div className="title">Batalhando: </div>
                    <div className="text-1"> Ganha a carta do adversário que tiver o valor maior, de acordo com o atributo selecionado. Entregue ou receba sua carta.</div>

                    <div className="title">Empate: </div>
                    <div className="text-1"> O atributo selecionado tendo o mesmo valor, será selecionado o próximo valor na seguinte ordem:</div>
                    <lu>
                        <li>Força</li>
                        <li>Inteligência</li>
                        <li>Velocidade</li>
                        <li>Habilidade</li>
                        <li>Equipamento</li>
                    </lu>

                    <div className="text-1"> Exemplo: Empatando no atributo 'habilidade', será selecionado o atributo 'Equipamento'; empatando em 'Equipamento' será selecionado 'Força'.</div>
                    <div className="text-1"> Então pense também no próximo atributo antes de escolher o principal.</div>

                </div>
                <div className="collumn">
                    <div className="title">Super Trunfo: </div>
                    <div className="text-1"> A carta 'Super Trunfo' ganha de todas as outras cartas, independentemente do valor de seus atributos, só perdendo para as cartas com A no seu identificador.</div>

                    <div className="atributs-img-structions">
                        <img className="img-card-structions" src={supe}></img>
                        <lu>
                            <li className="atribut-6" > <div className="line-super"> </div>Identificador</li>
                        </lu>
                    </div>

                    <div className="text-1"> Exemplo: Você pegou a carta 'Super Trunfo' e o PC tendo uma carta com identificar 'A2', 'A3', 'A4', 'A5' ou 'A6', você perde a rodada, porém, se a carta do pc for com identificar 'B1', 'C1', 'D1', etc...você ganha a rodada .</div>

                    <div className="title">Ganhando o Jogo: </div>
                    <div className="text-1"> Ganha o jogo quem ficar com todas as cartas.</div>
                    <div onClick={() => navigate(`/`)} className="btn-goBack">VOLTAR</div>
                </div>

            </div>
        </div>
    )
}