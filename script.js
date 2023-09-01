function playRockPaperScissor(player1,player2) {
    if (player1 == 'Pedra'){
        if (player2 == 'Papel') {
            return 'Jogador 2 venceu!'
        } else if (player2 == 'Tesoura') {
            return 'Jogador 1 venceu!'
        }
        return 'Empate!'
    } else if (player1 == 'Papel') {
        if (player2 == 'Pedra') {
            return 'Jogador 1 venceu!'
        } else if (player2 == 'Tesoura') {
            return 'Jogador 2 venceu!'
        }
        return 'Empate!'
    }
    if (player2 == 'Pedra') {
        return 'Jogador 2 venceu!'
    } else if (player2 == 'Papel') {
        return 'Jogador 1 venceu!'
    }
    return 'Empate!'
}

const resultado = playRockPaperScissor(prompt('Pedra, Papel ou Tesoura?'),prompt('Pedra, Papel ou Tesoura?'));
console.log(resultado); // Saída: "Jogador 1 venceu!"Pedra