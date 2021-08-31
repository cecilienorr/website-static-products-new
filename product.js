const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea-alt-del.dk/t7/api/products/" + id;

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);

  document.querySelector(".product .brand").textContent = product.brandname;
  document.querySelector(".product .productname").textContent =
    product.productdisplayname;

  // Does not work
  document.querySelector(
    "img.product-img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}