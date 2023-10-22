import joker from "give-me-a-joke";

export function dadJoke() {
  return new Promise(function(resolve, reject) {
    try{
      joker.getRandomDadJoke(function(joke){

      });
    } catch(error) {
      reject(error)
    }
    
  });
}