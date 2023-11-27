let itemWrapper = document.getElementById('item')



fetch("./product.json")
.then((res) => {
return res.json();
})
.then((data)=>{
  elements = "";
  console.log(data);
  data.products.forEach(element => {
    elements += `
    <a href="${element.link}">
    <div class="item-wrapper"> 
    <div class="item-image">
      <img src="./products/${element.image}" alt="product" class="item-image-img">
    </div>
    <div class="item-name">
      ${element.name}
    </div>
  </div>
  </a>
  `
  });
  itemWrapper.innerHTML += elements
  }
);

