function playRockPaperScissor(player1,player2) {
    if (player1 == player2) {
        return 'Empate!'
    } else if (player1 == 'Pedra' && player2 == 'Papel' || player1 == 'Papel' && player2 == 'Tesoura' || player1 == 'Tesoura' && player2 == 'Pedra'){
        return 'Jogador 2 venceu!'
    } else {
        return 'Jogador 1 venceu!'
    }
}

const resultado = playRockPaperScissor('Pedra','Papel');
console.log(resultado); // Saída: "Jogador 1 venceu!"Pedra