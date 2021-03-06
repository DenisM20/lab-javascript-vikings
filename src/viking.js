// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    } 
    attack = () => this.strength;
    receiveDamage = (theDamage) => { this.health -= theDamage
    }
}

// Viking .....is there more than 1 builder in the same chain???????????????????????????????????????
class Viking extends Soldier { 
        constructor(name, health, strength) {
        super()
        this.name = name
        this.health = health
        this.strength = strength
    }
    attack () {
        super.attack
}
    receiveDamage = (theDamage) => { this.health -= theDamage
        if(this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`
        }else 
            return `${this.name} has died in act of combat`       
    }
    battleCry = () => "Odin Owns You All!"
}  
// Saxon
class Saxon extends Soldier {

    receiveDamage = (theDamage) => { this.health -= theDamage
        if(this.health > 0) {
            return `A Saxon has received ${theDamage} points of damage`
        }
        else return `A Saxon has died in combat`
        }
    }

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let result = randomSaxon.receiveDamage(randomViking.strength)
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1)
        }
        return result
    }
    saxonAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let result = randomViking.receiveDamage(randomSaxon.strength)
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1)
        }
        return result
    }
    showStatus() {
        if (this.saxonArmy.length -1 ) {
            return `Vikings have won the war of the century!`
        }
        else if (this.vikingArmy.length -1) {
            return `Saxons have fought for their lives and survived another day...`
        }
        else {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}
