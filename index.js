console.log("##########2️⃣ Calculadora de partidas Rankeadas##########");

function calcularNivel(vitorias, derrotas) {
    let saldo = vitorias - derrotas;

    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (saldo >= 11 && saldo <= 20) {
        nivel = "Bronze";
    } else if (saldo >= 21 && saldo <= 50) {
        nivel = "Prata";
    } else if (saldo >= 51 && saldo <= 80) {
        nivel = "Ouro";
    } else if (saldo >= 81 && saldo <= 90) {
        nivel = "Diamante";
    } else if (saldo >= 91 && saldo <= 100) {
        nivel = "Lendário";
    } else if (saldo >= 101) {
    nivel = "Imortal"
    } else {
    
    }
    
    console.log(`O Herói tem saldo de ${saldo} e está no nível de ${nivel}.`);
}

calcularNivel(70, 20); 