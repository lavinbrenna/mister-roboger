let userInput = "40";

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
    userArray.push(i);
  }return userArray;
}

messageCreator(userInput);




numberAnalyzer(userInput);