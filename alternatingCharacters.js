const generateAlternates = (str) => {
    let count = 0
    let i = 1
    while (i < str.length) {
        if (str[i] === str[i - 1]) count += 1
        i += 1
    }

    return count
}

const sample = "AAAAB"

console.log(generateAlternates(sample));