const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon','Lemon' ];
    
     const antiLemon = fruitBasket.filter(fruits => {
  return !fruits.includes('Lemon')
})


console.log(antiLemon)


