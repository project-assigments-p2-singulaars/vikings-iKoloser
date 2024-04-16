import { Saxon } from "./Saxon";
import { Viking } from "./Viking";

export class War {
    vikingArmy: Viking[] = [];
    saxonArmy: Saxon[] = [];

    constructor() {}

    addViking(viking: Viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon: Saxon) {
        this.saxonArmy.push(saxon);
    }


    vikingAttack() {
        
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

        const randomViking = this.vikingArmy[randomVikingIndex];
        const randomSaxon = this.saxonArmy[randomSaxonIndex];

        const damage = randomViking.attack(); 

        
        const receivedDMG = randomSaxon.receiveDamage(damage); 

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1); 
        }

        return receivedDMG

    }
    saxonAttack() {
        
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

        const randomViking = this.vikingArmy[randomVikingIndex];
        const randomSaxon = this.saxonArmy[randomSaxonIndex];

        const damage = randomSaxon.attack(); 

        const receivedDMG =  randomViking.receiveDamage(damage); 

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1); 
        }
        
        return receivedDMG;
    }

    showStatus(): string {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survive another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }

}
