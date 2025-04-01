let userscore =0;
let pcscore =0;

const choices =document.querySelectorAll(".choice");

// player selection rps
const playgame = (userchoice ) =>{
    console.log("userchoice = ", userchoice);
    const computerchoice =compgen();
    console.log("computer choice =",computerchoice)
};

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