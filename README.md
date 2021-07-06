
### This is a readme for the "JUST 4 INGREDIENTS RECIPE APP"

This app contains 4 files
* Index.html 
* index.js 
* recipeManager.js
* Image file

### Minimum Requirements
1. Add recipes that have names and ingredients.
2. Show a list of all recipes
3. Delete recipes
4. Recipes are saved in the browser's local storage.

### Additional Information

1. Comments are added on every section of the code for readability.
2. This also includes a Readme file for instructions on how to use it.


### Installation instructions ###
      Save the index.html file in the root folder
      Create subfolders for the js files and the images and add corresponding files in them. File Structure should be as follows:
                index.html
                    js/index.js
                    js/recipeManager.js
                    images/4ingredientbglg.jpeg
       Website will be accessible via https://bspama.github.io/myrecipes/       

### Technologies Used ###
      This simple web app uses a HTML, BOOTSTRAP CSS AND VANILLA JAVASCRIPT and all Data are saved into the Local Storage.
      In addition, I have upload the working version to GitHub so it can be viewed publicly.

### Details about the APP
The website was designed using HTML and BOOTSTRAP.
The form features, a logo on top, borders, shadows and a background image to enhance the look.
The Web App features a simple validation to check whether there are valid data inputs in each fields. Once validated, these data are added into the Local Storage and displayed on the page.  I have used Cards to display all the added Recipes and improved the layout by adding shadows, borders and highlighted the titles for readability.

The functionality to add and delete a recipe was made possible by vanilla JS.

The index.html contains the main formatting of the page and this is where i'm linking all the images and javascript files.

Within the index.js file I’ve created a recipe manager and instantiated it with a currentId that is set to 0. At the same time loaded and rendered the recipeManager in case there are data already saved in the local storage.

In this page, i have basically created a constant or a variable for every form fields. This is also the page containing all the validation checks. In addition, an EventListener has been added here as well for the submit button and the delete button.

The recipeManager javascript file contains the methods to add, load, delete a recipe and a render method to render everything onto the website.

In addition, I've added a way for the user to clear all the fields in just one click making it easy for them to start adding new information.
