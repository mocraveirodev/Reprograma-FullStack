window.onload = function () {
  //alert("carregou");
  showProducts();
};

function getProducts() {
  return data["items"];
}

const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", function(e){
  e.preventDefault();

  let inputProdutoNome = document.getElementById("produto-nome").value;
  let inputProdutoPreco = document.getElementById("produto-preco").value;
  let inputProdutoFoto = document.getElementById("produto-foto").value;

  let novoItem = {
    "product": {
      "name": "",
      "images": [],
      "price": {
        "value": 0,
      },
    },
  };

  novoItem["product"]["name"] = inputProdutoNome;
  novoItem["product"]["price"]["value"] = inputProdutoPreco;
  novoItem["product"]["images"].push(inputProdutoFoto);

  data["items"].push(novoItem);
  showProducts();
});

function showProducts(){

  // for (produto of getProducts()){
  //   let productDiv = document.getElementById("products");
  //   productDiv.innerHTML += "<div class='product'>" 
  //   + "<img src=" + produto["product"]["images"][0] + " class='product-img' />"
  //   + "<div class='text-name'>" 
  //   + "<h3 class='product-name'>$" + produto["product"]["name"] + "</h3>"
  //   + "</div>" + "<div class='text-price'>"
  //   + "<p class='product-price'>" 
  //   + Number(produto["product"]["price"]["value"]).toLocaleString('pt-br', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })
  //   + "</p>" + "</div>" + "</div>"
  // }

  let productDiv = document.getElementById("products");
  productDiv.innerHTML = `
    ${getProducts().map((produto) => `
      <div class="product">
        <img src="${produto["product"]["images"][0]}" class="product-img" />
        <div class="text-name">
          <h3 class="product-name">${produto["product"]["name"]}</h3>
        </div>
        <div class="text-price">
          <p class="product-price">${Number(produto["product"]["price"]["value"]).toLocaleString('pt-br', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</p>
        </div>
      </div>
      `).join("")}
  `
  }



