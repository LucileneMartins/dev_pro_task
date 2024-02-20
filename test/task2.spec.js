function sortProducts(products) {
    return products.sort((a,b) => {a.stock - b.stock});
}

const products = [
    {"name": "Product A", "price": 100, "stock": 5},
    {"name": "Product B", "price": 200, "stock": 3},
    {"name": "Product C", "price": 50, "stock": 10}
];

console.log(sortProducts(products));
