function coins(amount, availableCoins) {
    var neededCoins = [];

    for (var j = 0; j < availableCoins.length; j++) {
        neededCoins[j] = [];
        var sum = 0;

        while (round(sum, 2) < amount) {

            for (var i = j; i < availableCoins.length; i++) {
                var newAmount = round(sum + availableCoins[i], 2);
                if (newAmount <= amount) {
                    neededCoins[j].push(availableCoins[i]);
                    sum += availableCoins[i];
                    break;
                }

            };
        };

    }

    neededCoins = neededCoins.sort(function(a, b) {
        return a.length > b.length;
    })

    return neededCoins[0];
}

function round(num, decimalPoints) {
    return parseFloat(Math.round(num * 100) / 100).toFixed(decimalPoints);
}


console.log(coins(41, [29, 13, 1]));
