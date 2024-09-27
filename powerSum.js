const helper = (num, initial, power) => {
    const diff = num - Math.pow(initial, power)
    if (diff === 0) return 1
    if (diff < 0) return 0

    return helper(num, initial + 1, power) + helper(diff, initial + 1, power)
}

console.log(helper(100, 1, 2));