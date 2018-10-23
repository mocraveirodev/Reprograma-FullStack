window.onload = function () {
  //alert("carregou");
  showProducts();
};

function getProducts() {
  return data["items"];
}

function showProducts() {

  // let nome = "Ju"
  // console.log(`meu nome é ${nome}`)
  // console.log("meu nome é " + nome)

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

  //`template string`

  let productDiv = document.getElementById("products");
  productDiv.innerHTML = `
    ${getProducts().map((produto) => `
      <div class="product">
        <img src="${produto["product"]["images"][0]}" class="product-img" />
        <div class="text-name">
          <h3 class="product-name">${produto["product"]["name"]}</h3>
        </div>
        <div class="text-price">
          <p class="product-price">${Number(produto["product"]["price"]["value"]).toLocaleString('pt-br', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</p>
        </div>
      </div>
      `).join("")}
  `
}
document.querySelector

document.getElementById('button').addEventListener('click', function (ev) {
  ev.preventDefault();
  // let nomeProd = document.getElementById('nomeProd').value;
  // let precoProd = document.getElementById('precoProd').value;
  // let imagemProd = document.getElementById('imagemProd').value;
  // let imgArray = [document.getElementById('imagemProd').value];
  // let itemObj = {
  //   "product": {
  //     "name": document.getElementById('nomeProd').value,
  //     "images": [document.getElementById('imagemProd').value],
  //     "price": {
  //       "value": document.getElementById('precoProd').value
  //     }
  //   }
  // }
  data["items"].push({
    "product": {
      "name": document.getElementById('nomeProd').value,
      "images": [document.getElementById('imagemProd').value],
      "price": {
        "value": document.getElementById('precoProd').value
      }
    }
  });
  showProducts();
});



