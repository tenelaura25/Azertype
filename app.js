



const str = "hello World";

function inverseMot(mot){
  console.log(mot.split('').reverse().join(''));
 
}

inverseMot(str);
//fonction qui verifie si une chaine de caractere est un palindrome

const string = 'abba';

function palindrome(string){
 
  if(string === string.split('').reverse().join(''))
  {
    console.log("ceci est un palindrome");
  }
  else 
  console.log("ceci n'est pas un palindrome");

}
palindrome(string);

//trouver le mot le plus long de la chaine de caractere 

var str1 = "ceci est une bonnne choe";
function longMot(str1)
{
  var array =[];
  var long = str1.split(' ');
  console.log(long);
  
  for(var i=0; i<long.length; i++)
  {
    
        array.push (long[i].length);
  } 
  console.log(Math.max(...array));
   
}
longMot(str1);
// generer un nombre aleatoire entre 0 et 10 en clickant sur le boutton

const btn =document.querySelector("button");

function myrandom()
{
  console.log(Math.round(Math.random()*10));
      
  }

  function myrandomfruit()
{
  fruits =["banane", "avocat", "plantain","tomate"];
 let fruit =Math.round(Math.random()*fruits.length-1);
      console.log(fruits[fruit]);
  }

  //mettre en majuscule la premiere lettre de chaque mot

  var letter = "je suis heureuse de vous voir";

  function convertMa(letter)
  {
    var arrays = letter.split(' ');
    var first = [];
    var str2;
    for (var i = 0; i < arrays.length; i++)
    {
       str2 = arrays[i].charAt(0).toUpperCase();
      // console.log(arrays[i].replace(arrays[i].charAt(0), str2));
       first.push(arrays[i].replace(arrays[i].charAt(0), str2));
    }
     console.log(first.join(' '));
  }

  convertMa(letter);

  str3= "bonjour";
  console.log(str3.replace("b", "a"));

//repeter une chaine de caractere que l'on passe en argument

var str4 ="bonjour mamam";
var chainedouble ="";
function repeat(str4, num)
{
for(var i=0; i<num; i++)
{
  chainedouble += " "+ str4;
}
 console.log(chainedouble);
}

repeat(str4, 3);

//compter les caracteres dans un champ en javascript

/*var messg = document.getElementById("msg");
 

 messg.addEventListener('keypres',compter());

function compter()
{
  console.log(messg.value);
}
compter();*/

//declarer un object en javascript
let homme = {
  nom: "aline",
  prenom: "raw",
  age:15
}
homme.numero= 105263;
console.log(homme);

let ticket = {
  nomFilm :"squiz game",
  prix :"10 euro",
  numeroSalle: 4
}
let nom = "laura";
console.log("Bonjour "+ nom +"," + "votre film" + 
  ticket.nomFilm + " est en salle" + ticket.numeroSalle);

 // Copie par référence
///////////////////////
let variableComplexe1 = ['pomme', 'cerise']
let variableComplexe2 = variableComplexe1
let variableComplexe3 = [...variableComplexe1];

variableComplexe2.push('poire')

console.log('variableComplexe1', variableComplexe1);
console.log('variableComplexe2', variableComplexe2);
console.log('variableComplexe3', variableComplexe3);

let playlist =["hiphop","makossa","salsa"];
let totalMorceaux= 3;
playlist.push("bikussi","rumba");

playlist.pop();
console.log(playlist);
totalMorceaux = playlist.length;

console.log(totalMorceaux);