let price = 1.87;  // Example price
let cid = [  // Cash in drawer
  ["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25],
  ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]
];

document.getElementById('purchase-btn').addEventListener('click', function() {
    const cash = parseFloat(document.getElementById('cash').value);
    const changeDueElement = document.getElementById('change-due');

    if (cash < price) {
        alert("Customer does not have enough money to purchase the item");
        return;
    } else if (cash === price) {
        changeDueElement.textContent = "No change due - customer paid with exact cash";
        return;
    }

    const changeDue = calculateChange(price, cash, cid);
    changeDueElement.textContent = changeDue;
});

function calculateChange(price, cash, cid) {
    let changeDue = cash - price;
    let totalCID = cid.reduce((total, coin) => total + coin[1], 0);

    if (totalCID < changeDue) {
        return "Status: INSUFFICIENT_FUNDS";
    } else if (totalCID === changeDue) {
        return "Status: CLOSED " + cid.filter(coin => coin[1] > 0).map(coin => `${coin[0]}: $${coin[1]}`).join(" ");
    } else {
        let changeArray = [];
        const currencyUnit = {
            "ONE HUNDRED": 100, "TWENTY": 20, "TEN": 10, "FIVE": 5, "ONE": 1, 
            "QUARTER": 0.25, "DIME": 0.1, "NICKEL": 0.05, "PENNY": 0.01
        };

        for (let i = cid.length - 1; i >= 0; i--) {
            let coinName = cid[i][0];
            let coinTotal = cid[i][1];
            let coinValue = currencyUnit[coinName];
            let coinAmount = 0;

            while (changeDue >= coinValue && coinTotal > 0) {
                changeDue -= coinValue;
                coinTotal -= coinValue;
                coinAmount += coinValue;
                changeDue = Math.round(changeDue * 100) / 100;
            }

            if (coinAmount > 0) {
                changeArray.push([coinName, coinAmount]);
            }
        }

        if (changeDue > 0) {
            return "Status: INSUFFICIENT_FUNDS";
        } else {
            return "Status: OPEN " + changeArray.map(coin => `${coin[0]}: $${coin[1].toFixed(2)}`).join(" ");
        }
    }
}

