const createRecipeHtml = (id, name, ingredients1, ingredients2, ingredients3, ingredients4, instruction) => {

  const html =`
  <div class="col-sm-4" data-recipe-id="${id}">
  <div class="card border-secondary shadow p-3 mb-5 bg-body rounded">
    <div class="card-body">
      <h5 class="card-header rounded text-success">${name}</h5>
      <p class="card-text"><h6>Ingredients:</h6></p>
      <p class="card-text">&nbsp;&nbsp;&nbsp;${ingredients1}</p>
      <p class="card-text">&nbsp;&nbsp;&nbsp;${ingredients2}</p>
      <p class="card-text">&nbsp;&nbsp;&nbsp;${ingredients3}</p>
      <p class="card-text">&nbsp;&nbsp;&nbsp;${ingredients4}</p>
      <p class="card-text"><h6>Instruction</h6></p>
      <p class="card-text">&nbsp;&nbsp;&nbsp;&nbsp;${instruction}</p>
      <button type="button" class="btn btn-success delete-button">Delete</button>
    </div>
  </div>
</div>       
`;
  return html;
};

class RecipeManager {
  constructor(currentID = 0) {
    this.recipes = [];
    this.currentID = currentID;
  }

  addRecipe(name, ingredients1, ingredients2, ingredients3, ingredients4, instruction) {
    // Within the addRecipe method, increment the this.currentId

    // create a recipe using this function and push it to the this.recipe Array.

    // 1. create a recipe
    const newRecipe = {
      currentID: this.currentID++,
      name: name,
      ingredients1: ingredients1,
      ingredients2: ingredients2,
      ingredients3: ingredients3,
      ingredients4: ingredients4,
      instruction: instruction,
    };

    // 2. push the recipe to the this.recipe array with the correct properties of the recipe.

    this.recipes.push(newRecipe);
    // console.log(this.recipe);
  }

  // Create render method to show recipe list

  render() {

    //console.log('render');

    // empty recipe html list array
    let recipeHtmlList = [];

    // for each recipe, create the recipe html
    this.recipes.forEach((recipe) => {
      const recipeHtml = createRecipeHtml(
        recipe.currentID,
        recipe.name,
        recipe.ingredients1,
        recipe.ingredients2,
        recipe.ingredients3,
        recipe.ingredients4,
        recipe.instruction,
      );
      // push the new recipe html to the empty recipe html list array
      recipeHtmlList.push(recipeHtml);
    });

    // join the html list array into one string, where each element from the array starts on a new line
    const recipeHtml = recipeHtmlList.join("\n");

    // target the recipe list div element from index.html and replace its inner html with the string we just created in recipeHtml.
    const recipeList = document.querySelector("#recipe-list");
    recipeList.innerHTML = recipeHtml;
  }

  // Create a save method to localStorage
 
  save() { 
    //create a JSON string of the recipe using `JSON.stringify()` and store it to a new variable, `recipeJson`
    const recipeJson = JSON.stringify(this.recipes);
    //Store the JSON string in `localStorage` under the key `recipe` using `localStorage.setItem()`.
    localStorage.setItem("recipe",recipeJson);
    //Convert this.currentID to string
    const currentID = JSON.stringify(this.currentID);
    // Store the `currentId` variable in `localStorage` under the key `currentId` using `localStorage.setItem()`.
    localStorage.setItem("currentID",currentID);
  }

  //Create a load method to check if a recipe is already saved in the localStorage

  load() {
      //check if any recipe are saved in localStorage with `localStorage.getItem()`.
    if(localStorage.getItem("recipe")){
      //Get the JSON string of recipe from localStorage and save into recipeJson variable
      const recipeJson = localStorage.getItem("recipe");
      // Convert the `recipeJson` string to an array using `JSON.parse()` and store it in `this.recipes`
      this.recipes = JSON.parse(recipeJson) 
    }
      //Next, check if the `currentId` is saved in localStorage with `localStorage.getItem()`.
    if (localStorage.getItem("currentID")) {
      //If the `currentId` is stored, get the `currentId` in localStorage using `localStorage.getItem()` and store it in a new variable, `currentId`.
      const currentID = localStorage.getItem("currentID");
      // Convert the currentId to a number before storing it to the `RecipeManager`'s `this.currentId`
      this.currentID = parseInt(currentID);
    }
  }
 
 // Create a `deleteRecipe` method within the`RecipeManager` class that take one parameter, `recipeId`, which is the id of the recipe we want to be deleted.

  deleteRecipe(recipeID){
    //2. In the `deleteRecipe` method, create a new variable `newRecipe` and set it to an empty array.
    const newRecipe = [];
    //3. Loop over the recipes, and for each iteration, (1) get current recipe and store in a variable recipe, 
    this.recipes.forEach((currentRecipe) => {
      const recipe = currentRecipe
      //(2) check if recipe.currentID is not equal to recipeID passed as a parameter, 
      if (recipe.currentID != recipeID) {
      //(3)if the recipe.id is not equal to the recipeID  push the recipe into the newRecipe array.
      newRecipe.push(recipe);
      }
      //4. Set `this.Recipe` to `newRecipes`.
      this.recipes = newRecipe;  
    });
    
  }
}
