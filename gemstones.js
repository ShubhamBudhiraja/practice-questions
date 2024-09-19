const testAgain = (arr) => {
    const uniqueElem = [...(new Set(arr[0]))]
    let gemCount = 0
    uniqueElem.forEach((elem) => {
        const isGem = arr.every((rock) => rock.includes(elem))
        if (isGem) gemCount += 1
    })

    return gemCount
}


const arr = ["basdfj", "asdlkjfdjsa", "bnafvfnsd", "oafhdlasd"];

console.log(testAgain(arr));
