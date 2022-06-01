<div id="top">
        <div id="topContainer">cards Jogador: {cardsJogador && cardsJogador.length} </div>
        <div id="topContainer">cards PC: {cardsPC && cardsPC.length} </div>
      </div>

      <div id="choice">
        <div>{turn} defini como atributo: {attribut}</div>
      </div>
      <div id="containerCards">
        <div className="introLefth">
          <div className="card">
            <div>{cardsJogador && cardsJogador[0].id}</div>
            //<img src={cardsJogador && cardsJogador[0].imagem} width="100" />
            //<div>{cardsJogador && cardsJogador[0].nome}</div>
            <div onClick={() => atributSelect("Habilidade")}>Habilidade: {cardsJogador && cardsJogador[0].habilidade}</div>
            <div onClick={() => atributSelect("Força")}>Força: {cardsJogador && cardsJogador[0].forca}</div>
            <div onClick={() => atributSelect("Velocidade")}>Velocidade: {cardsJogador && cardsJogador[0].velocidade}</div>
            <div onClick={() => atributSelect("Equipamento")}>Equipamento: {cardsJogador && cardsJogador[0].equipamento}</div>
            
          </div>
        </div>
        <div className="introRigth">
          <div className="card">
            <div>Card PC costas</div>
          </div>
        </div>
      </div>
      <div className="seletor">
        <button onClick={() => GotoBattlePhase()}>Batalhar</button>
      </div>