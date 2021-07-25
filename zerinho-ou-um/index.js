function solucao(jogadores) {
    const contaJogadasZero = [];
      const contaJogadasUm = [];
      jogadores.map((jogador) => {
          if(jogador.jogada === 0) contaJogadasZero.push(jogador);
          else contaJogadasUm.push(jogador);
      })
      if(contaJogadasZero.length === 1) console.log(contaJogadasZero[0].nome);
      else if(contaJogadasUm.length === 1) console.log(contaJogadasUm[0].nome);
      else console.log('NINGUEM');
    
  }