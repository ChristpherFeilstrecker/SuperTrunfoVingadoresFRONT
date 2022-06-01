import { BASE_URL } from "../constants/BaseURL";
import useRequestData from "../Hooks/useRequestData";


const GlobalCards = (props) => {

const cards = useRequestData(`${BASE_URL}/supertrunfomarvel/start`)

let cardsJogador =cards && cards.cardsJogador.slice();

let cardsPC =cards && cards.cardsPC.slice();

}

export default GlobalCards;