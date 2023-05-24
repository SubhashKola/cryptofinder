const coinListContainer = document.getElementById('coinList');

function searchCoins() {
    const amountInput = document.getElementById('amountInput');
    const amount = amountInput.value;

    // Clear previous search results
    coinListContainer.innerHTML = '';

    // Make API request to retrieve cryptocurrency data

    // Mock data for demonstration
    const coins = [
        { symbol: 'BTC', name: 'Bitcoin', price: 5000000 },
        { symbol: 'ETH', name: 'Ethereum', price: 300000 },
        { symbol: 'ADA', name: 'Cardano', price: 150 },
        { symbol: 'XRP', name: 'Ripple', price: 80 },
        { symbol: 'LTC', name: 'Litecoin', price: 15000 },
        { symbol: 'DOT', name: 'Polkadot', price: 3000 },
        { symbol: 'LINK', name: 'Chainlink', price: 4000 },
        { symbol: 'XLM', name: 'Stellar', price: 40 },
        { symbol: 'BCH', name: 'Bitcoin Cash', price: 100000 },
        { symbol: 'UNI', name: 'Uniswap', price: 2000 },
        { symbol: 'AAVE', name: 'Aave', price: 500 },
        { symbol: 'ATOM', name: 'Cosmos', price: 800 },
        { symbol: 'DOGE', name: 'Dogecoin', price: 10 },
        { symbol: 'VET', name: 'VeChain', price: 30 },
        { symbol: 'EOS', name: 'EOS', price: 200 },
        { symbol: 'THETA', name: 'Theta Network', price: 1000 },
        { symbol: 'XMR', name: 'Monero', price: 4000 },
        { symbol: 'COMP', name: 'Compound', price: 2500 },
        { symbol: 'XTZ', name: 'Tezos', price: 150 },
        { symbol: 'ALGO', name: 'Algorand', price: 50 },
        { symbol: 'FTT', name: 'FTX Token', price: 350 },
        { symbol: 'SNX', name: 'Synthetix', price: 1800 },
        { symbol: 'MKR', name: 'Maker', price: 50000 },
        { symbol: 'ZEC', name: 'Zcash', price: 3000 },
        { symbol: 'OMG', name: 'OMG Network', price: 150 },
        { symbol: 'SOL', name: 'Solana', price: 10000 },
        { symbol: 'DASH', name: 'Dash', price: 2000 },
        { symbol: 'KSM', name: 'Kusama', price: 6000 },
        { symbol: 'REN', name: 'Ren', price: 40 },
        { symbol: 'BAT', name: 'Basic Attention Token', price: 20 },
        { symbol: 'ZRX', name: '0x', price: 30 },
    ];

    const affordableCoins = coins.filter(coin => coin.price <= amount);

    if (affordableCoins.length === 0) {
        const noResultsMessage = document.createElement('p');
        noResultsMessage.innerText = 'No coins found within the entered amount.';
        coinListContainer.appendChild(noResultsMessage);
    } else {
        affordableCoins.forEach(function(coin) {
            const coinItem = document.createElement('div');
            coinItem.classList.add('coin-item');

            const symbol = document.createElement('span');
            symbol.classList.add('coin-symbol');
            symbol.innerText = coin.symbol;

            const name = document.createElement('span');
            name.classList.add('coin-name');
            name.innerText = coin.name;

            const price = document.createElement('span');
            price.classList.add('coin-price');
            price.innerText = '/-' + coin.price.toFixed(2);

            coinItem.appendChild(symbol);
            coinItem.appendChild(name);
            coinItem.appendChild(price);

            coinListContainer.appendChild(coinItem);
        });
    }
}

// Add event listener to the search form
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    searchCoins();
});
