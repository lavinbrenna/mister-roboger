//Business Logic
let userInput = "13";

function numberAnalyzer(input){
  let numbers = /^[0-9]+$/;
  if(input.match(numbers) != null){
    return true;
  }
  else{
    return false;
  }
}

function messageCreator(input){
  let userNumber = parseInt(input);
  const userArray = [];
  for(i = 0; i <= userNumber; i++){
    if(i === 1){
      userArray.push("Beep!");
    }else if(i === 2){
      userArray.push("Boop!");
    }else if(i === 3){
      userArray.push("Won't you be my neighbor?")
    }else if(i === 13){
      userArray.push("Won't you be my neighbor?")
    }else if(i === 21){
      userArray[13] = 13;
      userArray.push("Boop");
    }else if(i === 32){
      userArray[13] = 13;
      userArray[21] = 21;
      userArray.push("Won't you be my neighbor?");
    }
    else{
      userArray.push(i);
    }
  }
  return userArray.join(", ");
}

messageCreator(userInput);


//UI Logic



numberAnalyzer(userInput);
messageCreator(userInput);