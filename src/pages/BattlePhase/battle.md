<div id="top">
        <div id="topContainer">cards Jogador:  {cardsJogador && cardsJogador.length}</div>
        <div id="topContainer">cards PC: {cardsPC && cardsPC.length}</div>
      </div>
      <div id="winner">
        <div>Ganhador: {win}</div>
      </div>

      <div id="containerCards">


        <div className="introLefth">
          <div className="cardJogador">
            <div>{cardsJogador && cardsJogador[0].id}</div>
            <img src={cardsJogador && cardsJogador[0].imagem} width="100" />
            <div>{cardsJogador && cardsJogador[0].nome}</div>
            <div>Habilidade: {cardsJogador && cardsJogador[0].habilidade}</div>
            <div>Força: {cardsJogador && cardsJogador[0].forca}</div>
            <div>Velocidade: {cardsJogador && cardsJogador[0].velocidade}</div>
            <div>Equipamento: {cardsJogador && cardsJogador[0].equipamento}</div>
            <div>Inteligência: {cardsJogador && cardsJogador[0].inteligencia}</div>
          </div>
        </div>
        <div className="introRigth">
          <div className="cardPC">
            <div>{cardsPC && cardsPC[0].id}</div>
            <img src={cardsPC && cardsPC[0].imagem} width="100" />
            <div>{cardsPC && cardsPC[0].nome}</div>
            <div>Habilidade: {cardsPC && cardsPC[0].habilidade}</div>
            <div>Força: {cardsPC && cardsPC[0].forca}</div>
            <div>Velocidade: {cardsPC && cardsPC[0].velocidade}</div>
            <div>Equipamento: {cardsPC && cardsPC[0].equipamento}</div>
            <div>Inteligência: {cardsPC && cardsPC[0].inteligencia}</div>
          </div>
        </div>
      </div>
      <div className="seletor">
        <button onClick={() => givCard()}>{message()}</button>
      </div>