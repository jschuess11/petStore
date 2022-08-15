var shop = [
  {
    title: "Yogi Bear",
    image: "./imgs/yogi.png",
    price: "12,000",
    description: "Desires lots of food",
  },
  {
    title: "Santa's Little Helper",
    image: "./imgs/santashelper.png",
    price: "25,000",
    description: "Great family pet",
  },
  {
    title: "SPECIAL: 2 for 1",
    image: "./imgs/2stupiddogs.png",
    price: "1000",
    description: "Low price",
  },
  {
    title: "Tom",
    image: "./imgs/tom.png",
    price: "20,000",
    description: "Not great at keeping mice away",
  },
  {
    title: "Dino",
    image: "./imgs/dino.png",
    price: "12,000",
    description: "Loveable classic",
  },
  {
    title: "Bugs Bunny",
    image: "./imgs/bugsbunny.png",
    price: "50,000",
    description: "Sophisticated rabbit",
  },
  {
    title: "Crush",
    image: "./imgs/Crush.png",
    price: "30,000",
    description: "Friendly turtle",
  },
];

var postHTML = " ";

for (var i = 0; i < shop.length; i++) {
  var heading =
    "<div class=\"product card text-center col-lg-5 col-md-5 m-3 style='width: 10px;'" +
    '"><span><h5 >' +
    shop[i].title +
    "</h5>";
  var image = '<img class="card-img-top" src="' + shop[i].image + '"/';
  var price = "<br><p> $" + shop[i].price + "</p></span>";
  var description =
    '<div class="card-body text-center"><p>' +
    shop[i].description +
    '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>';
  var concatThis = heading + image + price + description;
  postHTML = postHTML + concatThis;
}
document.getElementById("shop").innerHTML = postHTML;
