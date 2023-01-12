import { Ingredient } from './Ingredient.js';

window.addEventListener("DOMContentLoaded", function(){
    let Bacon = new Ingredient ("Bacon", "assets/img/bacon.png" );
    let Carotte = new Ingredient ("Carotte", "assets/img/carrots.png" );
    let Fromage = new Ingredient ("Fromage", "assets/img/cheese.png" );
    let Oeuf = new Ingredient ("Oeuf", "assets/img/egg.png" );
    let Aubergine = new Ingredient ("Aubergine", "assets/img/eggplant.png" );
    let Chèvre = new Ingredient ("Fromage de chèvre", "assets/img/goat-cheese.png" );
    let Miel = new Ingredient ("Miel", "assets/img/honey.png" );
    let Champignon = new Ingredient ("Champignon", "assets/img/mushroom.png" );
    let Olive = new Ingredient ("Olive", "assets/img/olive.png" );
    let Piment = new Ingredient ("Piment", "assets/img/pepper.png" );
    let PommeDeTerre = new Ingredient ("Pomme de terre", "assets/img/potato.png" );
    let Tomate = new Ingredient ("Tomate", "assets/img/tomato.png" );
    
    let availableIngredients = [];
    
    availableIngredients.push(Bacon, Carotte, Fromage, Oeuf, Aubergine, Chèvre, Miel, Champignon, Olive, Piment, PommeDeTerre, Tomate);
    console.log(availableIngredients);
    
function etape4()
{
    

    let section = document.getElementById("stage");
    let h2 = document.createElement("h2");
    let txt1 = document.createTextNode("Choix des ingrédients");
    
    let ul = document.createElement("ul");
    
    h2.appendChild(txt1);
    section.appendChild(h2);
    section.appendChild(ul);
    
    for (let i = 0; i < availableIngredients.length; i++)
    {
        let li = document.createElement("li");
        let article = document.createElement("article");
        let header = document.createElement("header");
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        let h3 = document.createElement("h3");
        
        let txt = document.createTextNode(availableIngredients[i].file);
        let txt1 = document.createTextNode(availableIngredients[i].name);
        
        li.appendChild(article);
        article.appendChild(header);
        header.appendChild(figure);
        h3.appendChild(txt1);
        header.appendChild(h3);
        figure.appendChild(img);
        img.setAttribute("src", availableIngredients[i].file);
        img.setAttribute("alt", availableIngredients[i].name);
        ul.appendChild(li);
    }
};
function etape5()
{
    

    let section = document.getElementById("choix");
    
    let ul = document.createElement("ul");
    
    section.appendChild(ul);
    
    for (let i = 0; i < availableIngredients.length; i++)
    {
        let li = document.createElement("li");
        let article = document.createElement("article");
        let header = document.createElement("header");
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        let h3 = document.createElement("h3");
        
        let txt = document.createTextNode(availableIngredients[i].file);
        let txt1 = document.createTextNode(availableIngredients[i].name);
        
        li.appendChild(article);
        article.appendChild(header);
        header.appendChild(figure);
        h3.appendChild(txt1);
        header.appendChild(h3);
        figure.appendChild(img);
        img.setAttribute("src", availableIngredients[i].file);
        img.setAttribute("alt", availableIngredients[i].name);
        ul.appendChild(li);
    }
};
});

 