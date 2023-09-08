function nonConstructibleChange(coins) {
    let newCoin = 0
    coins.sort((a, b) => a - b)
    if (coins.length == 0) {
        return 1
    }
    for (let coin of coins) {
        if (coin > newCoin + 1) {

            return newCoin + 1
        }
        newCoin += coin
    }
    return newCoin + 1;
}

let result = nonConstructibleChange([3, 1, 1, 7, 2, 22, 5])
console.log(result)
