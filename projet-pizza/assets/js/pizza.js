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
        
    }

    display()
    {
    
    }
    
};
export { Pizza };