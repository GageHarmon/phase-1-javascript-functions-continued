// code your solution here
function saturdayFun(roller = 'roller-skate'){
    return `This Saturday, I want to ${roller}!`;
}


let mondayWork = function(remote = "go to the office"){
    return `This Monday, I will ${remote}.`;
}


let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }
