let userscore =0;
let pcscore =0;

// const choices =document.querySelectorAll(".choice");
// console.log(choices)
// const drawgame=()=>{
//     console.log("game was draw");
// }
// // player selection rps
// const playgame = (userchoice) =>{
//     console.log("userchoice = ", userchoice);
//     const computerchoice =compgen();
//     console.log("computer choice =",computerchoice)
//   if(userchoice==compgen){
//         drawgame();
//   } else{
//     let userwin =true;
//     if(userchoice==="rock"){
//         //computer can select scissor or paper
//        userwin = compgen=== "paper "? false :true ;
//     } else  if(userchoice==="paper"){
        // computer can select rock and scissor

//         userwin = computerchoice=== "paper" ? true : false;
//     } else {
//         // user = sciccor 
//        // computer can generate rock and paper 
//         userwin=computerchoice==="scissors"?true : false;
//     }
//     showinner(userwin);
// }
  
// }


// // computer choice generation 



let userchoice;
let inp ;

inp = document.getElementById("paper");
inp.addEventListener("click", function(){
userchoice="paper"
console.log(userchoice)
playgame(userchoice);
})
inp = document.getElementById("rock");
inp.addEventListener("click", function(){
userchoice="rock"
console.log(userchoice)
playgame(userchoice);
})
inp = document.getElementById("scissors");
inp.addEventListener("click", function(){
userchoice="scissors"
console.log(userchoice)
playgame(userchoice);
})

let compgen =()=> {
        // generates the rock paper and scissors 
        const options =["rock","paper","scissors"];
      const randoms= Math.floor( Math.random() *3); 
      return options[randoms];
    }
    


    let playgame = (userchoice) =>{
            console.log("userchoice = ", userchoice);
            let computerchoice =compgen();
            console.log("computer choice =",computerchoice)
          if(userchoice===computerchoice){
            console.log("game was draw");
            meg.innerText = "Game was Draw";
            meg.style.backgroundColor="rgb(234, 219, 16)"
            meg.style.color="black"
          } else{
            let userwin =true;
            if(userchoice==="paper"){
                //computer can select scissor or paper
               userwin = computerchoice=== "rock"? true : false;
            } else  if(userchoice==="scissors"){
                // computer can select rock and scissor
        
                userwin = computerchoice === "paper" ? true : false;
            } else {
                // user = scissor 
               // computer can generate rock and paper 
                userwin=computerchoice==="scissors"?true : false;
            }
            showinner(userwin);
        }
          
        }

       
        let showinner=(userwin)=>
{
    if(userwin){
         console.log("user wins ");
         meg.style.backgroundColor = "green";
         meg.innerText = "You Win";
         userscore++;
         console.log("fgj")
         us.innerText=userscore;
           meg.style.color="white"

        } else {
            console.log("user lost the game");
            meg.style.backgroundColor = "red";
            meg.innerText = "You lost";
            pcscore++;
         co.innerHTML=pcscore;
           meg.style.color="white"

       
    }
} 
let meg =document.getElementById("msg");
let us=document.getElementById("user");
let co=document.getElementById("comp");


