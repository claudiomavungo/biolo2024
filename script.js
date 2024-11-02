import { produtos } from "./products.js";

let cart = [];

// Função para buscar os produtos
async function getProducts(value) {
    const response = await fetch(`https://fakestoreapi.com/products/category/${value}`).then(res => res.json());

    console.log(response);
    
    let acumlator = ''; // Acumulador de HTML

    // Loop para criar o HTML de cada produto
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

   

    // Insere todos os produtos no DOM
    document.querySelector('.produtos').innerHTML = acumlator;

    // Seleciona todos os botões de "Adicionar no carrinho" e adiciona o event listener
    const addCartButtons = document.querySelectorAll('.add-to-cart');
    addCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index'); // Obtém o índice do produto
            cart.push(response[index]); // Adiciona o produto ao carrinho
            console.log(cart); // Exibe o carrinho atualizado
            localStorage.setItem("cart", JSON.stringify(cart));
            
        });
    });


}

const pesquisar = document.querySelector('.pesquisar');
pesquisar.addEventListener('click', function () {
    const inputElement = document.querySelector('.input') 
        
    

    if (inputElement.value != 'electronics' && inputElement.value !='jewelery' 
        && inputElement.value !=`men's clothing` && inputElement.value !=`women's clothing`) {
        window.alert(`Para pesquisar escreva uma dessas catergorias (o site ainda é limitado e não foi traduzido para portugues):
            electronics, jewelery, men's clothing, women's clothing`)
    }
        getProducts(inputElement.value)
    
   
})



function  obterProdutos() {
    let acumulador= '';
for (let i = 0; i < produtos.length; i++) {
    const product = produtos[i];

    const html =  
    `<div class="produto">
        <img class="img-produto" src="${product.image}" alt="">
        <div class="produto-name">${product.name}</div>
        <div class="produto-price">${product.priceCents}kz</div>
        <button class="add-to-cart" data-index="${i}">Adicionar no carrinho</button>
    </div>`;
    
    acumulador += html;  // Acumula o HTML de cada produto
    produtos[i].quantity = 1
    console.log();
    
}
document.querySelector('.produtos').innerHTML = acumulador;
}
obterProdutos()

