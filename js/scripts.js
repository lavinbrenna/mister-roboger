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
  let userNumber = parseInt(number);
  const userArray = [];
  for(i = 0; i <= userNumber; i++){
    if(i <= 9){
      if(i === 1){
        userArray.push("Beep!");
      }else if(i === 2){
        userArray.push("Boop!");
      }else if(i === 3){
        userArray.push(name + ", won't you be my neighbor?");
      }else{
        userArray.push(i);
      }
      }
    else if(i > 9){
      let newDigit = i.toString().split('');
      if (newDigit[0].includes(1) && (newDigit[1] != '2' && newDigit[1] != '3')){
        userArray.push("Beep!");
      }
    }
    }
    /*else if(i > 9){
      let newDigit = i.toString().split('');
      if((newDigit[0].includes(1))&& (newDigit[1] != '2' && newDigit[1] != '3')){
        userArray.push("Beep!");
      }
      else if((newDigit[0].includes(1) && newDigit[1].includes(2))){
        console.log(newDigit[0],newDigit[1]);
        userArray.push("Boop!");
      }
      else if((newDigit[0].includes(1) && newDigit[1].includes(3))){
        console.log(newDigit[0], newDigit[1]);
        userArray.push(name + ", won't you be my neighbor?");
      }
      else if((newDigit[0].includes(2) && newDigit[1]!= '3')){
        userArray.push("Boop!");
      }
      else if(newDigit[0].includes(2)&& newDigit[1].includes(3)){
        userArray.push(name + ", won't you be my neighbor?");
      }
      else if(newDigit[0].includes(3)){
        userArray.push(name + ", won't you be my neighbor?");
      }
      else if(newDigit[1].includes(1)){
          userArray.push("Beep!");
        }
      else if(newDigit[1].includes(2)){
          userArray.push("Boop!");
        }
      else if(newDigit[1].includes(3)){
          userArray.push(name + ", won't you be my neighbor?");
        }else{
          userArray.push(i);
        }
      }*/
      return userArray.join(", ");
  }
  

//UI Logic

$(document).ready(function(){
  $("form#messageForm").submit(function(){
    event.preventDefault();
    const userInput = $("input#userInput").val();
    const userName = $("input#userName").val();
    const isNumber = numberAnalyzer(userInput);
    const userMessage = messageCreator(userInput, userName);
    if(isNumber === true){
      $("#response").show();
      $("#error").hide();
      $("#message").show();
      $(".roboMessage").text(userMessage);
    }else if(isNumber === false){
      $("#response").show();
      $("#error").show();
      $("#message").hide();
    }else{
      $("#response").hide();
    }
  });
})


