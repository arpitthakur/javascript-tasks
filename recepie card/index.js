var  recipe ={
    'title': 'Meal name',
    'servings': 2,
    'ingredients':['4 eggs','2 strips of bacon','1 tsp salt/pepper']
};
console.log(recipe.title);
console.log('Servings: ' + recipe.servings);
console.log('Ingredients:');
for (var i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}