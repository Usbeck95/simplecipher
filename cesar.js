/*console.log( String.fromCharCode(97) ) // fromCharCode() method converts Unicode values into characters. 65 og op for cap letters. 97 og op for små

const alpha = Array.from(Array(26)).map((e, i) => i + 65); // laver en array med 26 elementer. Giver hvert element en unicode fra 65 og op
const alphabet = alpha.map((x) => String.fromCharCode(x)); // tager den valgte værdi for elementet og laver hver værdi om til en string og bogstav.
console.log(alphabet);
*/
const $ = function(foo) {
    return document.getElementById(foo);
}

let plainmessage = $("plaintext");
let encryptedText = $("resulttext");

let plaintext = plainmessage.value;

plainmessage.addEventListener("input", characterEntered, false);

function characterEntered(e) {
    plaintext = e.target.value;
    plaintext = plaintext.toLowerCase();
    plaintext = plaintext.replace(/[^a-z]/, '');

    e.target.value = plaintext;

    doEncrypt();
}

function doEncrypt() {
    let encryptedMessage = "";
    let shift = 3;

    for (letter of plaintext) {
        encryptedMessage += shiftLetter(letter, shift);
    }
    console.log(encryptedMessage);
    encryptedText.value = encryptedMessage;
}

doEncrypt();

function shiftLetter(letter, shift) {
   let newLetter = "";

   let letterCode = letter.charCodeAt(0);
   let newLetterCode = letterCode + shift;
// hvis man ikke har vendt større end tegn rigtig, så kan det godt være man sidder en halv time og laver koden om
   if (newLetterCode > 122) {
       newLetterCode -= 26;
       // til hvis vi får et tal der bliver over unicode for z, så skal den trække 26 fra, og så får man, som gik man fra a.
   }
   newLetter = String.fromCharCode(newLetterCode);
   // stringfromcharcode tager et nummer og laver det til et bogstav i stedet.

   return newLetter;
}