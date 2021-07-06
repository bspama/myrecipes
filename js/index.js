// Initialize a new Recipe Manager with currentId set to 0
const recipeManager = new RecipeManager(0);

//In `js/index.js`, near the top of the file, after _instantiating_ `recipeManager`, `load` the recipe with `recipeManager.load()` and render them with `recipeManager.render()`.
recipeManager.load();
recipeManager.render();

//create a new recipe
const form = document.querySelector("#recipeForm");


const submitForm = (event) => {
  event.preventDefault();
  let validForm = true;

  const newNameInput = document.querySelector("#new-recipename");
  const newIngr1Input = document.querySelector("#new-ingredients1");
  const newIngr2Input = document.querySelector("#new-ingredients2");
  const newIngr3Input = document.querySelector("#new-ingredients3");
  const newIngr4Input = document.querySelector("#new-ingredients4");
  const newInstInput = document.querySelector("#new-inst");
  const recipeNameErr = document.querySelector("#rn-error-msg");
  const ingredientsErr = document.querySelector("#ni-error-msg");
  const instructionErr = document.querySelector("#nic-error-msg");

  // check if Recipe Name is blank

  if (newNameInput.value.trim() == "") {
    recipeNameErr.innerHTML = "Please enter a Recipe Name";
    recipeNameErr.style.color = "#ff0000";
    validForm = false;

    //recipeNameInput.focus();
  } else {
    recipeNameErr.innerHTML = "All good ";
    recipeNameErr.style.color = "green";
  }

  // check if Ingredients is left blank
  if (newIngr1Input.value.trim() == "") {
    ingredientsErr.innerHTML = "Please enter an Ingredient";
    ingredientsErr.style.color = "#ff0000";
    validForm = false;

    //newIngrInput.focus();
  } else {
    ingredientsErr.innerHTML = "All good ";
    ingredientsErr.style.color = "green";
  }

  // check if Instruction is left blank
  if (newInstInput.value.trim() == "") {
    instructionErr.innerHTML = "Please specify some instructions";
    instructionErr.style.color = "#ff0000";
    validForm = false;
  } else {
    instructionErr.innerHTML = "All good ";
    instructionErr.style.color = "green";
  }

  // if the information is valid, run the addRecipe function and the render function.
  if (validForm) {
      recipeManager.addRecipe(
      newNameInput.value,
      newIngr1Input.value,
      newIngr2Input.value,
      newIngr3Input.value,
      newIngr4Input.value,
      newInstInput.value,
    );

    form.reset();
    recipeNameErr.innerHTML = "";
    ingredientsErr.innerHTML = "";
    instructionErr.innerHTML = "";

    recipeManager.save();
    recipeManager.render();
  }

  //Clear all the fields and errors when Reset Button is clicked
  const reset = document.querySelector("#resetBtn");
  reset.addEventListener("click",() => {
      recipeNameErr.innerHTML = "";
      ingredientsErr.innerHTML = "";
      instructionErr.innerHTML = "";
  })

};

//Event Listener for Submit Event (ie Click Add Button) for the Form
form.addEventListener("submit", submitForm);

const recipeList = document.querySelector("#recipe-list");

//Event Listener to check when Delete Button is clicked
recipeList.addEventListener("click", (event) => {
  //Check if the event.target.classList contains the class 'delete-button'.
  if (event.target.classList.contains("delete-button")) { 
    //If it does, get the parentRecipe and store it as a variable.
    //console.log(event.target.parentElement.parentElement.parentElement);
    const parentRecipe = event.target.parentElement.parentElement.parentElement;
    //Get the recipeId of the parent recipe from its data-recipe-id property - remember, since it's stored as a string in a data attribute, we need to convert it to a number 
    const recipeID = parseInt(parentRecipe.dataset.recipeId);
    //Delete the recipe, passing the recipeId to recipeManager.deleteRecipe()
    console.log(recipeID);
    recipeManager.deleteRecipe(recipeID);
    //Save the recipe to localStorage using recipeManager.save()
    recipeManager.save();
    //Render the recipe using recipeManager.render().
    recipeManager.render();
    
  }
});

