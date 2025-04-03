let userscore =0;
let pcscore =0;
let msg=document.querySelector(#msg)
const choices =document.querySelectorAll(".choice");
console.log(choices)
const drawgame=()=>{
    msg.innertext="game was draw";
}
// player selection rps
const playgame = (userchoice) =>{
    console.log("userchoice = ", userchoice);
    const computerchoice =compgen();
    console.log("computer choice =",computerchoice)
  if(userchoice==compgen){
        drawgame();
  } else{
    let userwin =true;
    if(userchoice==="rock"){
        //computer can select scissor or paper
       userwin = compgen=== "paper "? false :true ;
    } else  if(userchoice==="paper"){
        // computer can select rock and scissor

        userwin = compgen === "rock" ? true:false ;
    } else {
        // user = sciccor 
       // computer can generate rock and paper 
        userwin=compgen==="rock"?false : true;
        showinner(userwin);
    }
  }
  
}
const showinner=(userwin)=>
{
    if(userwin){
         console.log("user wins ");
    } else {
        console.log("user lost the game");
    }
} 


// computer choice generation 
const compgen =()=> {
    // generates the rock paper and scissors 
    const options =["rock","paper","scissors"];
  const randoms= Math.floor( Math.random() *3); 
  return options[randoms];
}



choices.forEach((choice) =>{

choice.addEventListener("click", ()=> {
    const userchoice = choice.getAttribute("id")
   
    playgame(userchoice);
   
})



} )