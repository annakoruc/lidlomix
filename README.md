# MY RECIPES

In the project tab (MyRecipes) you can see my progress, and in the issues tab some of my future tasks.

[Check out what it will look like](https://www.figma.com/file/8BWwJ2PLUyNifepVuCOr7P/Lidlomix-przepisy?type=design&node-id=0%3A1&t=9fF9Hv69pNGZbNwE-1)

[Check out how I'm doing(best way mobile e.g Iphone 12 Pro)](https://lidlomix-eight.vercel.app/)

## 22.11.2023
- add login, logout, signUp(with verification email), and signUp with Google (Firebase auth) and add their validations
- create forgot password page(send email to reset password)
- delete the Iconify package from the project (add icons from material icons)
- add a dynamic hamburger menu (when the user is logged in and logged out)
- control of access to some pages when the user is logged in or logged out (favorite page, shopping list)
- when the user is logged out, can't add recipes to favorites (the heart button doesn't show)

![favorites-mobile](https://github.com/annakoruc/lidlomix/assets/95089940/caa22ad6-c1d5-4eda-9b81-acad07fac70e)
![shoppingList-mobil](https://github.com/annakoruc/lidlomix/assets/95089940/f0326281-7736-4374-9b95-d97c468c09e9)
![loginPage-mobile](https://github.com/annakoruc/lidlomix/assets/95089940/3d3bb9a6-b961-4dc6-8977-f9ae84d7e5d1)


## 10.10.2023
- Changed API with recipes (from Tasty to Spoonacular)
  * present APi has better documentation and more necessary requests
- show recipes directly from the API
- user can add recipes to favorites when they click heart on RecipeCard or directly on the recipe Page
- show favorites recipes on the Favorites Page (group of recipes Cards)
- user can add ingredients to the shopping list when checking some ingredients on the ingredients list and clicking the add button below
- user can delete ingredients from the shopping list after checking some of it
- user can search recipes on the Search Page by taping some tags or the name of the recipe



![allrecipes-mobile](https://github.com/annakoruc/lidlomix/assets/95089940/7365662c-b505-4ca8-9216-0218ef0d1978)
![recipe-mobile](https://github.com/annakoruc/lidlomix/assets/95089940/c94a364e-a8e6-4ce7-a3dc-25b407d2f7e5)


### Used technologies
- Next.js
- Typescript
- Material UI
- Firebase
- Axios
- Formik
