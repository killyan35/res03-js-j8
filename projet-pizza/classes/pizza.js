class Pizza{
    #ingredients;
    
    
    constructor(){
        this.#ingredients = [];
    } 
    get ingredient (){
        return this.#ingredients;
    }
    
    
    addIngredient(ingredient)
    {
        this.#ingredients.push(ingredient);
    }

    removeIngredient(ingredient)
    {   
        let newtab = [];
        for (let i = 0; i < this.#ingredients.length; i++) 
        {
            if (this.#ingredients[i].classList.contains("selected"))
                newtab.push(this.#ingredients[i]);
           
        }
    }

    display()
    {
    
    }
    
};
export { Pizza };