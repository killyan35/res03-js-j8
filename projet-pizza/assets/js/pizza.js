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
        console.log(this.#ingredients)
        
    }

    removeIngredient(ingredient)
    {   
        let newtab = [];
       
        for (let i = 0; i < this.#ingredients.length; i++) 
        {
            if (ingredient.name !== this.#ingredients[i].name)
            {
                newtab.push(this.#ingredients[i]);
            }
        }
        this.#ingredients = newtab;
        console.log(this.#ingredients)
        
    }

    display()
    {
    
    }
    
};
export { Pizza };