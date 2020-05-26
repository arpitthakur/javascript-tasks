function giveCompliment(name){
    var complimentArr = ["great","awesome","power","confidence","perfect","poor","made","such","stick","weak"];
       var randomNumber = Math.floor(Math.random() * complimentArr.length );
        let compliment = `You are ${complimentArr[randomNumber]}, ${name}`;
        return compliment;
       return ;
    }
    
    console.log(giveCompliment('arpit'))