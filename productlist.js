const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
  .then(function (res) {
    return res.json();
  })

  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  //   console.log(data);
  // data.forEach()
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  // Sold out

  // Grab template
  const template = document.querySelector("#smallProductTemplate").content;

  // Clone it
  const copy = template.cloneNode(true);

  // Change content
  copy
    .querySelector("a")
    .setAttribute("href", "productpage.html?id=" + product.id);

  copy.querySelector("h3").textContent = product.productdisplayname;

  copy.querySelector("h4").textContent = product.brandname;
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  if (product.soldout) {
    console.log(product);
  } else {
    copy.querySelector(".soldOut").classList.remove("soldOut");
  }

  copy.querySelector(".price").textContent = product.price;

  if (product.discount) {
    copy.querySelector("del").textContent = product.price;
    copy.querySelector(".price").textContent =
      product.price - (product.price * product.discount) / 100;
  } else {
    copy.querySelector("del").remove();
  }

  // Grab parent
  const parent = document.querySelector(".main-productlist");

  // Append
  parent.appendChild(copy);
}
