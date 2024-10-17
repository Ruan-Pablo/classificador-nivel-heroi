class Heroi {
    constructor(nome= "Randon", xp= 1000, ataque=30, vida=1000) {
        this.nome = nome // sera imutavel
        this.xp = xp
        this.nivel = null
        this.ataque = ataque
        this.vida = vida
    }
// gets
    exibirInfo(){
        console.log("---------------------")
        console.log("| Nome: " + this.nome)
        console.log("| XP: " + this.xp)
        console.log("| Nivel: " + this.nivel)
        console.log("| Vida: " + this.vida)
        console.log("| Ataque: " + this.xp)
        console.log("---------------------")
    }
    getNome(){
        return this.nome
    }
    
    getXp(){
        return this.xp
    }
    
    getAtaque(){
        return this.ataque
    }
    
    getVida(){
        return this.vida
    }
    // sets
    setXp(xp){
        this.xp = xp
        this.nivel = this.verificaNivel(xp)
    }
    
    setAtaque(ataque){
        this.ataque = ataque 
    }
    
    setVida(){
        this.vida = vida
    }

    verificaNivel(xp){ 
        if (xp <= 1.000){
            return "Ferro"
        } else if (xp >= 1.001 && xp <= 2.000) {
            return "Bronze"
        } else if (xp >= 2.001 && xp <= 5.000) {
            return "Prata"
        } else if (xp >= 5.001 && xp <= 7.000) {
            return "Ouro"
        } else if (xp >= 7.001 && xp <= 8.000) {
            return "Platina"
        } else if (xp >= 8.001 && xp <= 9.000) {
            return "Ascendente"
        } else if (xp >= 9.001 && xp <= 10.000) {
            return "Imortal"
        } else if (xp >= 10.001) {
            return "Radiante"
        }
    }
}

class Battle{
    constructor(rodadas, h1, h2){
        this.heroi1 = h1
        this.heroi2 = h2
        this.rodadas = rodadas*1000
        // Ganho
        this.xp_ataque = 100
        this.xp_esquiva = 50
        // Perda
        this.xp_perde_vida = 50
    }
    
    verificaEsquivou(){ // H1 ataca o H2
        let chance_esquiva = Math.random()
        if(chance_esquiva >= 0.5){ // esquivou
            return true
        }else{
            return false
        }
    }
    
    battle(){
        let chance_ataque_1_2 = 0
        let esquivou = false
        for (let cont = 0; cont<this.rodadas;cont++){
            chance_ataque_1_2 = Math.random()
            if (chance_ataque_1_2 > 0.5){
                esquivou = this.verificaEsquivou(this.heroi1, this.heroi2)
                
                if(esquivou === true){ // h2 esquivou
                    this.heroi2.setXp += this.xp_esquiva
                    // console.log(heroi2.getNome + " esquivou!")
                }else{
                    this.heroi2.setVida -= this.heroi1.getAtaque 
                    this.heroi1.setXp += this.xp_ataque
                    // console.log(heroi1.getNome + " atacou!")
                }
            }else{
                esquivou = this.verificaEsquivou(this.heroi2,this.heroi1)
                if(esquivou === true){ // h2 esquivou
                    this.heroi1.setXp += this.xp_esquiva
                    // console.log(heroi2.getNome + " esquivou!")
                }else{
                    this.heroi1.setVida -= this.heroi2.getAtaque 
                    this.heroi2.setXp += this.xp_ataque
                    // console.log(heroi1.getNome + " atacou!")
                }
            }
        }
        this.exibirFimBatalha()
    }

    verificarGanhador(){
        if(this.heroi1.getXp > this.heroi2.getXp){
            return 1
        }else{
            return 2
        }
    }
    
    exibirFimBatalha(){
        console.log("Apresentando os Herois\n\n")
        this.heroi1.exibirInfo()
        console.log("\n")
        this.heroi2.exibirInfo()
        console.log("\n")
        
        let ganhador = this.ganhador() 
        console.log( ganhador == 1 ? this.heroi1.getNome : this.heroi2.getNome + "eh o ganhador")
    }
}



ruan = new Heroi("Ruan")
pablo = new Heroi("Pablo")

batalha = new Battle(5)
batalha.battle(ruan, pablo)