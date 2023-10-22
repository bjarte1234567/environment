import joker from "give-me-a-joke";

export function dadJoke() {
    return new promise(function(resolve, reject){
        joker.getRandomDadJoke(resolve)
    })
}
