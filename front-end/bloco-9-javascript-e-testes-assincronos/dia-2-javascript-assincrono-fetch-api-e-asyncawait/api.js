const url = `https://api.coincap.io/v2/assets`;

const getCripto = async () => {
    const coin = await fetch(url)
        .then((response) => response.json())
        .then((data) => data.data)
        .catch((error) => error.toString());
    return coin;
}

coin.array.forEach((coin) => {
   const ul = document.getElementById('coins-list')
   const li = document.createElement('li')
  

});
getCripto();