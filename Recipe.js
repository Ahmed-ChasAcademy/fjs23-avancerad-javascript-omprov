export class Recipe {
    constructor(name, difficulty, metoder) {
        this.name = name
        this.difficulty = difficulty
        this.metoder = metoder
    }

    getRecipeInfo() {
        console.log(`name: ${this.name} difficuly: ${this.difficulty} metoder: ${this.metoder}`)
    }
}