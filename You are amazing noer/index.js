function giveCompliment (name) {
    var complimentArr = ["poor","weak","strong","powerful","brave","energetic"];
    var randomNumber = Math.floor(Math.random()* complimentArr.length);
    let compliment = `You are ${complimentArr[randomNumber]}, ${name}`;
    return compliment;
    return;
}
 
console.log(giveCompliment('arpit'));