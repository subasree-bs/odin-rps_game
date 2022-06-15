
// alert("hi");

// document.getElementById("you_r").addEventListener("click",display);
// function display() {
//     document.getElementById("you_choice").innerHTML = Date();
//   }
//   function reply_click(clicked_id)
//   {
//       alert(clicked_id);
//   }


var you_score1 = document.getElementById("you_score");
var machine_score1 = document.getElementById("machine_score");
var moves_count1 = document.getElementById("moves_count");
var you_choice=document.getElementById("you_choice");
var machine_choice=document.getElementById("machine_choice");
var moves_result= document.getElementById("moves_result");

moves_count1=5;

// for(let i=1; i<=5; i++){

function myFunction(you_choice_val){
  // var btnval = document.getElementById("you_p");
  btnval=you_choice_val;
  // alert(btnval);
  // document.getElementById("you_choice")=btnval;
  document.getElementById("you_choice").innerHTML= btnval;
  
  var machine_choice_val = Math.floor(Math.random() * 3);
  
  switch(machine_choice_val){
    case 0: machine_choice_val="Rock"; document.getElementById("machine_choice").innerHTML= machine_choice_val;break;
    case 1: machine_choice_val="Paper"; document.getElementById("machine_choice").innerHTML= machine_choice_val;break;
    case 2: machine_choice_val="Scissors"; document.getElementById("machine_choice").innerHTML= machine_choice_val;break;
  }

  if( you_choice_val == machine_choice_val){
    document.getElementById("moves_result").innerHTML="Same choice... Match DRAW";
  }
  else if(you_choice_val=="Rock" && machine_choice_val=="Scissors"){
    document.getElementById("moves_result").innerHTML="Rock BEATS Scissors ! You get a point!!";
    // moves_count--;
    you_score1++;
    document.getElementById("you_score").textContent=you_score1;
  }
  else if(you_choice_val=="Rock" && machine_choice_val=="Paper"){
    document.getElementById("moves_result").innerHTML="Paper BEATS Rock ! Machine gets a point!";
    machine_score1++;
    document.getElementById("machine_score").textContent=machine_score1;
  }
  else if(you_choice_val=="Paper" && machine_choice_val=="Rock"){
    document.getElementById("moves_result").innerHTML="Paper BEATS Rock ! You get a point!!";
    you_score1++;
    document.getElementById("you_score").textContent=you_score1;
  }
  else if(you_choice_val=="Paper" && machine_choice_val=="Scissors"){
    document.getElementById("moves_result").textContent="Scissors BEATS Paper ! Machine gets a point!";
    machine_score1++;
    document.getElementById("machine_score").textContent=machine_score1;
  }
  else if(you_choice_val=="Scissors" && machine_choice_val=="Paper"){
    document.getElementById("moves_result").innerHTML="Scissors BEATS Paper ! You get a point!!";
    you_score1++;
    document.getElementById("you_score").textContent=you_score1;
  }
  else if(you_choice_val=="Scissors" && machine_choice_val=="Rock"){
    document.getElementById("moves_result").innerHTML="Rock BEATS Scissors ! Machine gets a point!";
    machine_score1++;
    document.getElementById("machine_score").textContent=machine_score1;
  }
  else{}
moves_count1--;
document.getElementById("moves_count").textContent=moves_count1;

if(moves_count1==0){
  document.getElementById("content").style.display = "none";
  document.getElementById("final").style.display = "block";

}
else{}

if( you_score1 > machine_score1 ){
document.getElementById("final_result").innerHTML="YOU HAVE WON THE BATTLE !!!";
}
else if( machine_score1 > you_score1 ){
  document.getElementById("final_result").innerHTML="YOU HAVE LOST THE BATTLE ...";

}

else{
  document.getElementById("final_result").innerHTML="MATCH TIE !..";
}


}

// }