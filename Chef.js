export class Chef {
    constructor(fullname, recipes = []) {
        this.fullname = fullname
        this.recipes = recipes
    }
    learnRecipe() {
        this.recipes.push()
    }
    listRecipes() {
        console.log(`Kockens recept: ${this.recipes}`)
    }
}