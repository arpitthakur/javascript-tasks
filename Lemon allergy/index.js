function takeOutLemons(basket){
    const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

    const result = fruitBasket.filter(fruitBasket => fruitBasket.length > 6);

}



console.log(takeOutLemons(fruitBasket));