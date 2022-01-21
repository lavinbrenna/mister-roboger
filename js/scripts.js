let userInput = 0;

function numberAnalyzer(input){
  let numbers = [0,1,2,3,4,5,6,7,8,9];
  for(i = 0; i < numbers.length; i ++){
    if(input === numbers[i]){
      return true;
    }
    else{
      return false;
    }
  }
}

numberAnalyzer(userInput);