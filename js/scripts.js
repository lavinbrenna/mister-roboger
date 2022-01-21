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
  if(userNumber > 100){
    return name + ", this number is too big :(";
  }else{
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
        if (((newDigit[0].includes(1)) && (newDigit[1] != '2' && newDigit[1] != '3'))){
          userArray.push("Beep!");
        }
        else if((newDigit[0].includes(2) && newDigit[1] != '3')){
          userArray.push("Boop!");
        }
        else if((newDigit[0].includes(3) || newDigit[1].includes(3))){
          userArray.push(name + ", won't you be my neighbor?");
        }
        else if(newDigit[1].includes(1)){
          userArray.push("Beep!")
        }
        else if(newDigit[0]!='3' && newDigit[1].includes(2)){
          userArray.push("Boop!");
        }
        else{
          userArray.push(parseInt(newDigit.join("")));
        }
      }else{
        userArray.push(i);
      }
      }return userArray.join(", ");
    }
  }
//UI Logic

$(document).ready(function(){
  $("form#messageForm").submit(function(){
    event.preventDefault();
    const userInput = $("input#userInput").val();
    const userName = $("input#userName").val();
    const isNumber = numberAnalyzer(userInput);
    const userMessage = messageCreator(userInput, userName);
    const errorMessage = "1'm s0rry " + userName + " y0u must 3nt3r @ numb3r. try @g@in";
    if(isNumber === true){
      $("#response").show();
      $("#error").hide();
      $("#message").show();
      $(".roboMessage").text(userMessage);
    }else if(isNumber === false){
      $("#response").show();
      $("#error").show();
      $(".roboError").text(errorMessage);
      $("#message").hide();
    }else{
      $("#response").hide();
    }
  });
})


