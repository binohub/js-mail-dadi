
//! genera il userRandomNumber
const userRandomNumber = Math.floor(Math.random() * 6) + 1;
console.log(`il tuo numero ${userRandomNumber}`);
//! genera il botRandomNumber
const botRandomNumber = Math.floor(Math.random() * 6) + 1;
console.log(`il bot ha scelto ${botRandomNumber}`);

// ! if uguale pareggio
if (botRandomNumber == userRandomNumber) {
    console.log("pareggio");
// ! if minore vinto
}else if(botRandomNumber < userRandomNumber) {
    console.log("hai vinto!");
// ! sennò hai perso
}else{
    console.log("hai perso!");
}