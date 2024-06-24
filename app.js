
let apiUrl = 'https://fakestoreapi.com/products?limit=20'
let productsArray = [];
    fetch(apiUrl)
        .then(res => res.json())
        .then(json => {
            for (let i = 0; i < 20; i++) {
                productsArray.push(json[i]);
            }
        })
        .catch(error => {
        console.error('Error fetching data:', error);
    });

function Products(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
}

console.log(productsArray);
