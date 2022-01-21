let userInput = "22";

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
    }
    else{
      userArray.push(i);
    }
  }
  return userArray;
}

messageCreator(userInput);





//finished functions

function numberAnalyzer(input){
  let numbers = /^[0-9]+$/;
  if(input.match(numbers) != null){
    return true;
  }
  else{
    return false;
  }
}

numberAnalyzer(userInput);