//! lista di chi può accedere
const mails = ["js@gmail.com", "for@gmail.com",
"array@gmail.com", "while@gmail.com", "const@gmail.com",
"let@gmail.com", "console.log@gmail.com"];

//! mail approvata? 
let mailsApproved = false;

//! chiedi all'utente la sua mail
const mail = prompt("digita la tua mail");

// !count
const count = mails

//! controlla se presente in lista mediante un ciclo
for (let index = 0; index < count.length; index++) {
    element = mails[index];
    // console.log(index + element);
    if (mails[index] === mail) {
        console.log(`Index: ${index}  `+ element);

        //! se presente in lista restituisci ad mailsApproved true
        mailsApproved = true;
    }
}
//! se mailsApproved true
if (mailsApproved === true){
    console.log(`mail riconosciuta, puoi accedere`);   
}else{
    console.log(`ritenta, mail errata o non esistente`);
}



