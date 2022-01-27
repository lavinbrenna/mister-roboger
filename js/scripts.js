//Business Logic
function numberAnalyzer(number){
  let numbers = /^[0-9]+$/;
  if(number.match(numbers) != null){
    return true;
  }
  else{
    return false;
  }
}

function messageCreator(number, name){
  let userNumber = number;
  const userArray = [];
    for(let i = 0; i <= parseInt(userNumber); i++){
      let newDigit = i.toString();
      if ((newDigit.includes(1) && !newDigit.includes(2) && !newDigit.includes(3))){
          userArray.push("Beep!");
        }
        else if(newDigit.includes(2) && !newDigit.includes(3)){
          userArray.push("Boop!");
        }
        else if((newDigit.includes(3))){
          userArray.push(name + ", won't you be my neighbor?");
      }else{
        userArray.push(i);
      }
      }return userArray;
  }

//UI Logic

$(document).ready(function(){
  $("form#messageForm").submit(function(){
    event.preventDefault();
    const userInput = $("input#userInput").val();
    const userName = $("input#userName").val();
    const isNumber = numberAnalyzer(userInput);
    const userMessage = messageCreator(userInput, userName);
    const errorMessage = "ლ(ﾟдﾟლ) 1'm s0rry " + userName + " y0u must 3nt3r @ numb3r. try @g@in";
    if(isNumber === true){
      $("#default, #error").hide();
      $("#response, #message").show();
      $(".roboMessage").text(userMessage);
    }else if(isNumber === false){
      $("#default, #message").hide();
      $("#response, #error").show();
      $(".roboError").text(errorMessage);
    }else{
      $("#default, #response").hide();
    }
  });
})


