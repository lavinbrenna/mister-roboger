let userInput = "5";

function messageCreator(input){
  let userNumber = parseInt(input);
  const userArray = [];
  for(i = 0; i <= userNumber; i++){
    if(i === 1){
      userArray.push("Beep!");
    }else if(i === 2){
      userArray.push("Boop!");
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