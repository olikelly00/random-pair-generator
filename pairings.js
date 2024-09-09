function generateRandomNumber(int) {
    //generate a random number between 0 and the length of the coders array
    return Math.floor(Math.random() * int)
}

function randomiseCoders(coders) {
    //create an array to store the randomised coders
    const randomisedCoders = []
    const alreadyCalled = []
    while (randomisedCoders.length < coders.length) {
        let randomNumber = generateRandomNumber(coders.length)
        let randomCoder = coders[randomNumber]
        if (!alreadyCalled.includes(randomNumber)) {
            randomisedCoders.push(randomCoder)
            alreadyCalled.push(randomNumber)
        }
    }
    return randomisedCoders
}


function createPairs(randomisedCoders) {
    const pairs = []
    //if the number of coders is odd, the last pair will be a trio
    if (randomisedCoders.length % 2 != 0) {
        for (let i = 0; i < randomisedCoders.length; i += 2) {
            let pair = []
            pair.push(randomisedCoders[i])
            pair.push(randomisedCoders[i + 1])
            pairs.push(pair)
        }
        pairs[pairs.length - 2].push(pairs[pairs.length - 1][0])
        return pairs.slice(0, pairs.length-1)
    }
    //if the number of coders is even, there will be no trios
        else {
            for (let i = 0; i < randomisedCoders.length; i += 2) {
                let pair = []
                pair.push(randomisedCoders[i])
                pair.push(randomisedCoders[i + 1])
                pairs.push(pair) 
        }
    }
    return pairs
}

function formatPairings(pairs) {
    let resultString = "\n🤝 *~*~*~*~ Here are this week's pairings ~*~*~*~* 🤝  \n\n"
    for (let i = 0; i < pairs.length; i++) {
        if (pairs[i].length === 3) {
            resultString += `Group ${i+1}: this one's a trio -- ${pairs[i][0]}, ${pairs[i][1]} & ${pairs[i][2]}\n\n`
        } else {
        resultString += `Group ${i+1}: ${pairs[i][0]} & ${pairs[i][1]}\n\n`
        }
    }
    resultString += "\nHappy Coding! 👨‍💻\n"
    return resultString
}


console.log(formatPairings(createPairs(randomiseCoders(SoCcoders))))
