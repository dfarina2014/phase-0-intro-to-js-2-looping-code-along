const name = ["Charlie", "Samip", "Ali"];

function writeCards(name) {
    let messages = []
    for (let i = 0; i < name.length; i++) {
    console.log(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
    messages.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
    }
    return messages;
}

function countDown(value){
    while (value >= 0) {
    console.log(value--)
    }
}