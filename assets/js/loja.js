var produtos = [
    { id: 1, nome: 'Pelo & Derme 1500 VETNIL', preco: 121.90 },
];

var carrinho = [];

function adicionarAoCarrinho(produtoId) {
    var produto = produtos.find(function (p) {
        return p.id === produtoId;
    });

    if (produto) {
        carrinho.push(produto);
        atualizarCarrinho();
    }
}

function atualizarCarrinho() {
    var cartItems = document.getElementById('cart-items');
    var cartTotal = document.getElementById('cart-total');
    var total = 0;

    cartItems.innerHTML = '';
    carrinho.forEach(function (produto) {
        total += produto.preco;
        var item = document.createElement('div');
        item.innerText = produto.nome + ' - R$ ' + produto.preco.toFixed(2);
        cartItems.appendChild(item);
    });

    cartTotal.innerText = total.toFixed(2);
}

function finalizarCompra() {
    alert('Compra finalizada! Total: R$ ' + carrinho.reduce((total, produto) => total + produto.preco, 0).toFixed(2));
    carrinho = [];
    atualizarCarrinho();
}