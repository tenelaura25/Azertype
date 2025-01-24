

/*let recupereMot = prompt("ecrit le mot Cachalot");

if(recupereMot === listeMots[0])
    {
        console.log("mot entree correct");
        console.log(score +=1);
    }

else {
    console.log("mot pas correct");
}

//utlisation de la boucle for 
let point=0;
 for(var i = 0; i<listeMots.length; i++)
 {
    let retapeMot = prompt("ecrit le mot " + listeMots[i]);
    if(retapeMot=== listeMots[i])
    {
     point +=1;
     console.log(point);
    }
 } */

//const { disabled } = require("express/lib/application");

 //proposer deux types de listes de mots

   
 function afficherResultat (score, motPropose){
    // Récupération de la zone dans laquelle on va écrire le score
    let spanScore = document.querySelector(".zoneScore span")
    // Ecriture du texte
    let affichageScore = `${score} / ${motPropose}` 
    // On place le texte à l'intérieur du span. 
    spanScore.innerText = affichageScore
   }
    
   function afficherProposition (afficheMot){
    let zoneProp = document.getElementById("zoneProposition");
    zoneProp.innerText = afficheMot;
   } 

  /* function choisirPhrasesOuMots(){
    let  choisir = prompt("choisis phrase ou mot");
    while(choisir !== "phrase" && choisir !== "mot")
    {
         choisir = prompt("choisis Phrase ou mot");

    }
    return choisir;

   }*/
   /*function lancerBoucleDeJeu(listeProposition)
   {
    let score=0;
    for(var i = 0; i < listeProposition.length; i++)
        {
       //    let choix = prompt("ecrit ceci : " + listeProposition[i]);
           if(choix === listeProposition[i])
           {
            score ++;
           }
        }
        return score;
   }*/

   function lancerjeu(){
    //initialisation
    let score =0;
    let motPropose =0;
    
   // let jeu = choisirPhrasesOuMots();
   //variable pour compter
   let i = 0;
   let listeProposition = listeMots;
   
    
    let btn = document.getElementById("btnValiderMot");
    let inputEcrit= document.getElementById("inputEcriture");

    afficherProposition(listeProposition[i]);
// gestion de l'evenement click sur le bouton valider
    btn.addEventListener("click", function(){
        console.log(inputEcrit.value);
        //comparer si le mot propose est identique
        if(inputEcrit.value === listeProposition[i])
        {
            score++;
        }
        i++;
        afficherResultat(score, i);
        //pour vider le champ
        inputEcrit.value = ""; 
        //verifier si nous sommes a la fin de la liste
        if(listeProposition[i]=== undefined)
        {
            listeProposition[i]= "le jeu est fini";
            btn.ariaDisabled =true;
        }
        else 
        {
            afficherProposition(listeProposition[i]); 
        }
       
       // console.log(listeMots[i])
    });

   /* if(jeu === "mot"){
        score = lancerBoucleDeJeu(listeMots);
        motPropose = listeMots.length;

    }
    else if(jeu === "phrase")
    {
    score= lancerBoucleDeJeu(listePhrases);
    motPropose = listePhrases.length;
    }*/

    //afficher le mot ou la phrase
    //gestion de l'evement sur le button radio
    
let btnradio = document.querySelectorAll(".optionSource input");
for(var j= 0; j<btnradio.length; j++)
    {
        btnradio[j].addEventListener("change",(event)=>{
           //ceci indique quel element a ete selectionee
            console.log(event.target.value)
        if(event.target.value === 1)
            {  listeProposition= listeMots;
            }
            else 
            {
                listeProposition = listePhrases;
            }
            afficherProposition(listeProposition[i])
     }) 
    }
    
    afficherResultat(score, i);
   }
   
const form =document.querySelector("form")
//quand on submit
form.addEventListener("submit", (event) =>{
    //on empeche le comportement par defaut
    event.preventDefault();
    console.log("il n'ya pas de rechargement ici")

    //on recupere les deux champs et on affiche leur valeur
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    console.log(nom);
    console.log (email);


});

function afficherEmail (nom, email, score){
     let mailto =`mailto : ${email}?subject=Partage du score Azertype&body= Salut 
     je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}



