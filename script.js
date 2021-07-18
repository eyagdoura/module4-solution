var personne1 = new Object();
var personne2 = new Object();
var personne3 = new Object();
var personne4 = new Object();
var personne5 = new Object();
personne1.nom="eya";
personne2.nom="jalel";
personne3.nom="Joud";
personne4.nom="oumayma";
personne5.nom="jed";

var tableau=[personne1,personne2,personne3,personne4,personne5];
for (var i = 0; i < tableau.length; i++) {
   
 if (tableau[i].nom[0]=='j' || tableau[i].nom[0]=='J' ) 
 {
 	console.log("Goodbye " + tableau[i].nom);
}
else{
   console.log("hello " + tableau[i].nom);
}
 }

