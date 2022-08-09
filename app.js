var shop = [
  {
    title: "Yogi Bear",
    image: "./imgs/yogi.png",
    price: "15,000",
  },
  {
    title: "Santa's Little Helper",
    image: "./imgs/santashelper.png",
    price: "25,000",
  },
  {
    title: "SPECIAL: 2 for 1",
    image: "./imgs/2stupiddogs.png",
    price: "1000",
  },
  {
    title: "Tom",
    image: "./imgs/tom.png",
    price: "20,000",
  },
  {
    title: "Dino",
    image: "./imgs/dino.png",
    price: "12,000",
  },
  {
    title: "Bugs Bunny",
    image: "./imgs/bugsbunny.png",
    price: "50,000",
  },
  {
    title: "Crush",
    image: "./imgs/Crush.png",
    price: "30,000",
  },
];

var postHTML = " ";

for (var i = 0; i < shop.length; i++) {
  var heading =
    '<div class="product ' + '"><span><h5>' + shop[i].title + "</h5>";
  var image = '<img src="' + shop[i].image + '"/';
  var price = "<p> $" + shop[i].price + "</p></span>";
  var description =
    '<div class=""><p>' +
    shop[i].description +
    '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>';
  var concatThis = heading + image + price + description;
  postHTML = postHTML + concatThis;
}
document.getElementById("shop").innerHTML = postHTML;
