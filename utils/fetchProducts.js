
const getProduct = async (id="") => {
    let response = await fetch(`https://fakestoreapi.com/products/${id}`); //{} o [{},{},{},{}]
    let products = await response.json(); //{} o [{},{},{},{}]
    if (Array.isArray(products)) 
        return products
    else 
        return [products];
};

const postProduct = async (newProduct) => {
    let response = await fetch('https://fakestoreapi.com/products', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    })
    let answer = await response.json(); // objeto de vuelta de la petición
    //console.log("Este es el console.log de lo que devuelve la api", answer);
    return answer;
};

module.exports = {
    getProduct,
    postProduct,
}