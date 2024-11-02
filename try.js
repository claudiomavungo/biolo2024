for (let i = 0; i < response.length; i++) {
    const product = response[i];

    const html = 
    `<div class="produto">
        <img class="img-produto" src="${product.image}" alt="">
        <div class="produto-name">${product.title}</div>
        <div class="produto-price">${product.price}$</div>
        <button class="add-to-cart" data-index="${i}">Adicionar no carrinho</button>
    </div>`;
    
    acumlator += html;  // Acumula o HTML de cada produto
    response[i].quantity = 1
}
document.querySelector('.produtos').innerHTML = acumlator